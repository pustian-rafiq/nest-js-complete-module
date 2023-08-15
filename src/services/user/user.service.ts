import { Injectable } from '@nestjs/common';
import { CreateUserDto } from 'src/dto/user-craete.dto';

@Injectable()
export class UserService {
  getUsers() {
    return [
      {
        name: 'John',
        age: 36,
      },
      {
        name: 'John',
        age: 36,
      },
    ];
  }

  createUser(body: CreateUserDto) {
    console.log(body);
    return body;
  }

  getUser(userId: number) {
    return { userId };
  }
  updateUser(body: CreateUserDto, userID: number) {
    return {
      ...body,
      userID,
    };
  }
  deleteUser(userID: number) {
    return userID;
  }
}
