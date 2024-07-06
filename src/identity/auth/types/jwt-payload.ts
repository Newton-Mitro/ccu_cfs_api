export type JwtPayload = {
  sub: string;
  id: string;
  name: string;
  username: string;
  roles: string[];
  permissions: string[];
  userSecret: string;
};
