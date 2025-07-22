import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { sendResponse } from 'src/common/utils/response';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  async createUser(@Body() createUserDto: CreateUserDto) {
    const result = await this.userService.create(createUserDto);

    return sendResponse(result, 'User created Successfully');
  }

  @Get()
  async getUser() {
    const users = await this.userService.findAll();

    return sendResponse(users, 'Users retrive sucessfully');
  }
}
