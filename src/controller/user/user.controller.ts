import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
} from '@nestjs/common';
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
  getUserDetails(@Param('userId', ParseIntPipe) userId: number) {
    return this.userService.getUser(userId);
  }
  @Patch('/:userId')
  updateUser(
    @Body() updateUserDto: CreateUserDto,
    @Param('userId', ParseIntPipe) userId: number,
  ) {
    return this.userService.updateUser(updateUserDto, userId);
  }
  @Get('/:userId')
  deleteUser(@Param('userId', ParseIntPipe) userId: number) {
    return this.userService.deleteUser(userId);
  }
}
