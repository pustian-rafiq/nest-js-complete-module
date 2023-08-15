import { Injectable } from '@nestjs/common';

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

  createUser(body) {
    return body;
  }

  getUser(params) {
    return params;
  }
  updateUser(body, userID) {
    return {
      ...body,
      userID,
    };
  }
  deleteUser(userID) {
    return userID;
  }
}
