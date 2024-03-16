import { SetMetadata } from '@nestjs/common';
import { Permission } from '../enums/permissions.enum';

export const PERMISSION_KEY = 'permissions';
export const RequirePermissions = (...permissions: Permission[]) =>
  SetMetadata(PERMISSION_KEY, permissions);
