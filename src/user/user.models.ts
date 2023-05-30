import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

export type UserDocument = User & Document

@Schema()
export class User{
    @Prop()
    address: string;
    
    @Prop()
    kycDocument: string;

    @Prop()
    contactDetails: string;

    @Prop()
    emailId: string;

    @Prop()
    mobileNo: number;
}

export const UserSchema = SchemaFactory.createForClass(User)