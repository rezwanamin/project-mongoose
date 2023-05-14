import { Schema, model } from "mongoose";
import { IUser } from "./user.interface";

//Creating Schema using Interface
const userSchema = new Schema<IUser>({
    id: {type: String, required: true, unique:true},
    role: {type: String, required: true},
    password: {type: String, required: true},
    name: { 
        firstName: {type: String, required: true},
        middleName: {type: String},
        lastName: {type: String, required: true},
     },
    datePfBirth: {type: String},
    gender: {type: String, required: true, enum: ['male', 'female']},
    email: {type: String},
    contactNo: {type: String, required: true},
    emergencyContact: {type: String, required: true},
    presentAddress: {type: String, required: true},
    permanentAddress: {type: String, required: true},
  });

  //Creating Model
  export const User = model<IUser>('User', userSchema);