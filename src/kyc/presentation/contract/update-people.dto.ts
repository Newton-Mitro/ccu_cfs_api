import { PartialType } from '@nestjs/mapped-types';
import { CreatePeopleDTO } from './create-people.dto';

export class UpdatePeopleDTO extends PartialType(CreatePeopleDTO) {}
