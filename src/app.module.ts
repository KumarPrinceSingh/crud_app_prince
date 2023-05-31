import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema } from './user/user.models';
import { UserModule } from './user/user.module';




@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://crudapp:crudapp@cluster0.qg262dt.mongodb.net/'),
    MongooseModule.forFeature([{name:'user', schema:UserSchema}]),
    UserModule,
   
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
