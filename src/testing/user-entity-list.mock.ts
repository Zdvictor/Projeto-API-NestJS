import { Role } from '../enums/role.enum';
import { UserEntity } from '../user/entity/user.entity';

export const userEntityList: UserEntity[] = [
  {
    name: 'Victor',
    email: 'teste@.com.br',
    birthAt: new Date('2000-01-01'),
    id: 1,
    password: '$2b$10$KTCMumuAvsZcxgEXCA4.x.sqeqtrWXmB7ptFGkF.f32XW3OE3Awb6',
    role: Role.Admin,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    name: 'Glaucio Daniel',
    email: 'victor@teste.com.br',
    birthAt: new Date('2000-01-01'),
    id: 2,
    password: '$2b$10$KTCMumuAvsZcxgEXCA4.x.sqeqtrWXmB7ptFGkF.f32XW3OE3Awb6',
    role: Role.Admin,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    name: 'Djalma Sindaux',
    email: 'djalma@teste.com.br',
    birthAt: new Date('2000-01-01'),
    id: 3,
    password: '$2b$10$KTCMumuAvsZcxgEXCA4.x.sqeqtrWXmB7ptFGkF.f32XW3OE3Awb6',
    role: Role.Admin,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
];
