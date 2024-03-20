import { Injectable } from '@nestjs/common';
import { UUID } from 'src/common/utils/uuid.util';

// This should be a real class/interface representing a user entity
export type User = any;

@Injectable()
export class UsersService {
  private readonly users = [
    {
      userId: 1,
      username: 'john',
      password: 'changeme',
    },
    {
      userId: 2,
      username: 'maria',
      password: 'guess',
    },
  ];

  async listAll(queries: any): Promise<User[]> {
    return this.users;
  }

  async findOne(username: string): Promise<User | undefined> {
    return this.users.find((user) => user.username === username);
  }

  async crate(username: string, password: string): Promise<User | undefined> {
    return this.users.push({
      userId: parseInt(UUID.makeAccountId(6)),
      username: username,
      password: password,
    });
  }

  async update(username: string): Promise<User | undefined> {
    return this.users.find((user) => user.username === username);
  }

  async delete(username: string): Promise<User | undefined> {
    return this.users.find((user) => user.username === username);
  }

  async assignRole(role: any): Promise<any> {}

  async addPermission(useCase: any): Promise<any> {}

  async removePermission(useCase: any): Promise<any> {}
}
