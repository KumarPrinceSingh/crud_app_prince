import { Body, Controller, Get, Post, Put, Param, Delete, Patch} from '@nestjs/common';
import { AppService } from './user.service';
import { User } from './user.models';
import { UserUpdateDto } from './userUpdate.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post()
  async createUser(@Body() userDto: User){
    return this.appService.createUser(userDto)
  }

  @Get()
  readUser(){
    return this.appService.readUser()
  }

  @Patch(':id')
  async updateUser(
    @Param('id') id:string ,@Body() updateData:UserUpdateDto
    ):Promise<User>{
    return this.appService.updateUser(id,updateData)
  }

  @Delete(':id')
  async deleteUser(@Param('id') id:string){
    return this.appService.deleteUser(id)
  }

  
}
