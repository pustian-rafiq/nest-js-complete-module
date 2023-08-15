import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { CreateUserDto } from 'src/dto/user-craete.dto';
import { UserService } from 'src/services/user/user.service';

@Controller('/user')
export class UserController {
  constructor(private userService: UserService) {}
  @Get()
  getUser() {
    return this.userService.getUsers();
  }

  @Post()
  createUser(@Body() createUserDto: CreateUserDto) {
    return this.userService.createUser(createUserDto);
  }

  @Get('/:userId')
  getUserDetails(@Param() params: { userId: number }) {
    return this.userService.getUser(params.userId);
  }
  @Patch('/:userId')
  updateUser(
    @Body() updateUserDto: CreateUserDto,
    @Param() params: { userId: number },
  ) {
    return this.userService.updateUser(updateUserDto, params.userId);
  }
  @Get('/:userId')
  deleteUser(@Param() params: { userId: number }) {
    return this.userService.deleteUser(params.userId);
  }
}
