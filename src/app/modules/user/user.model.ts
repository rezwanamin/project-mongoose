import { Model, Schema, model } from "mongoose";
import { IUser, IUserMethods } from "./user.interface";

type UserModel = Model<IUser,{},IUserMethods>;

//Creating Schema using Interface
const userSchema = new Schema<IUser, UserModel, IUserMethods>({
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
  },
  {
    methods: {
        getFullName(){
            return this.name.firstName+this.name.lastName;
        },
        getRole() {
            return this.role;
        },
        
    }
  });

//   userSchema.method('getFullName', function(){ return this.name.firstName+this.name.lastName})
  //Creating Model
  export const User = model<IUser, UserModel>('User', userSchema);