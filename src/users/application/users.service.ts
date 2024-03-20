import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument } from '../infrastructure/schemas/user.schema';
import { CreateUserRequest } from './contracts/create-user.request';
import { UpdateUserRequest } from './contracts/update-user.request';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

  async create(createUserRequest: CreateUserRequest): Promise<UserDocument> {
    const user = { ...createUserRequest, roles: ['User'] };
    const createdUser = new this.userModel(user);
    return createdUser.save();
  }

  async findAll(): Promise<UserDocument[]> {
    return this.userModel.find().exec();
  }

  async findById(id: string): Promise<any> {
    return this.userModel.findById(id);
  }

  async findByUsername(username: string): Promise<any> {
    return this.userModel.findOne({ username: username }).exec();
  }

  async update(id: string, updateUserDto: UpdateUserRequest): Promise<any> {
    return this.userModel
      .findByIdAndUpdate(id, updateUserDto, { new: true })
      .exec();
  }

  async updateRefreshToken(
    id: string,
    updateRefreshToken: { refreshToken: string | null },
  ): Promise<any> {
    return this.userModel
      .findByIdAndUpdate(id, updateRefreshToken, {
        new: true,
      })
      .exec();
  }

  async remove(id: string): Promise<any> {
    return this.userModel.findByIdAndDelete(id).exec();
  }
}
