import { SetMetadata } from '@nestjs/common';
import { Permission } from '../enums/permissions.enum';

export const PERMISSION_KEY = 'permissions';
export const HasPermissions = (...permissions: Permission[]) =>
  SetMetadata(PERMISSION_KEY, permissions);
