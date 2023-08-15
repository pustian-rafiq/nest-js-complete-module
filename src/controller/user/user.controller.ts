import { Controller, Get, Param, Patch, Post, Req } from '@nestjs/common';
import { Request } from 'express';
import { UserService } from 'src/services/user/user.service';

@Controller('/user')
export class UserController {
  constructor(private userService: UserService) {}
  @Get()
  getUser() {
    return this.userService.getUsers();
  }

  @Post()
  createUser(@Req() req: Request) {
    return this.userService.createUser(req.body);
  }

  @Get('/:userId')
  getUserDetails(@Param() params: { userId: string }) {
    return this.userService.getUser(params.userId);
  }
  @Patch('/:userId')
  updateUser(@Req() req: Request, @Param() params: { userId: string }) {
    return this.userService.updateUser(req.body, params.userId);
  }
  @Get('/:userId')
  deleteUser(@Param() params: { userId: string }) {
    return this.userService.deleteUser(params.userId);
  }
}
