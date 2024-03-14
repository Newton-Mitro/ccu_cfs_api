import { PartialType } from '@nestjs/mapped-types';
import { CreatePersonRequest } from './create-person.request';

export class UpdatePersonRequest extends PartialType(CreatePersonRequest) {}
