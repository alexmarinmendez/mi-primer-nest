import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  users: Array<User>;

  constructor() {
    this.users = [
      {
        id: 1,
        first_name: 'Alex',
        last_name: 'Marin',
        email: 'alexmarinmendez@gmail.com',
        password: 'secret',
        avatar: 'soylindo',
      },
      {
        id: 2,
        first_name: 'Luis',
        last_name: 'Miguel',
        email: 'dobleluismiguel@gmail.com',
        password: 'secret',
        avatar: 'soydoble',
      },
      {
        id: 3,
        first_name: 'Luis',
        last_name: 'Miguel',
        email: 'dobleluismiguel@gmail.com',
        password: 'secret',
        avatar: 'soydoble',
      },
      {
        id: 4,
        first_name: 'Luis',
        last_name: 'Miguel',
        email: 'dobleluismiguel@gmail.com',
        password: 'secret',
        avatar: 'soydoble',
      },
      {
        id: 5,
        first_name: 'Luis',
        last_name: 'Miguel',
        email: 'dobleluismiguel@gmail.com',
        password: 'secret',
        avatar: 'soydoble',
      },
      {
        id: 6,
        first_name: 'Luis',
        last_name: 'Miguel',
        email: 'dobleluismiguel@gmail.com',
        password: 'secret',
        avatar: 'soydoble',
      },
      {
        id: 7,
        first_name: 'Luis',
        last_name: 'Miguel',
        email: 'dobleluismiguel@gmail.com',
        password: 'secret',
        avatar: 'soydoble',
      },
    ];
  }

  create(createUserDto: CreateUserDto) {
    const user = {
      id: this.users.length + 1,
      ...createUserDto,
    };
    this.users.push(user);
    return user;
  }

  findAll() {
    return this.users;
  }

  findOne(id: number) {
    return this.users.find((item) => item.id == id);
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
