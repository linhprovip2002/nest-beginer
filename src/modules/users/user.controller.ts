import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
  UsePipes,
} from '@nestjs/common';
import { UserService } from './user.service';
import { JoiValidationPipe } from 'src/core/pipes';
import { UserSchema, IdSchema } from 'src/core/interceptors';
@Controller('todo')
export class UserController {
  constructor(private readonly userService: UserService) {}
  @UsePipes(new JoiValidationPipe(UserSchema))
  @Post()
  create(@Body() body) {
    return this.userService.create(body);
  }

  @Get()
  findAll() {
    return this.userService.findAll();
  }
  @UsePipes(new JoiValidationPipe(IdSchema))
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userService.findOne(+id);
  }
  @UsePipes(new JoiValidationPipe(IdSchema))
  @Put(':id')
  update(@Param('id') id: string, @Body() body) {
    return this.userService.update(+id, body);
  }
  @UsePipes(new JoiValidationPipe(IdSchema))
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userService.delete(+id);
  }
}
