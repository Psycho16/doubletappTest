export enum UserRole {
  VISITOR = 'VISITOR',
  ARTIST = 'ARTIST',
  ADMIN = 'ADMIN',
  EXPERT = 'EXPERT'
}

export interface UserModel {
  id: number;
  email: string;
  role: UserRole;
}