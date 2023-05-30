import { Module } from '@nestjs/common';
import { AppController } from './user.controller';
import { AppService } from './user.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema } from './user.models';



@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://crudapp:crudapp@cluster0.qg262dt.mongodb.net/'),
    MongooseModule.forFeature([{name:'user', schema:UserSchema}])
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class UserModule{}