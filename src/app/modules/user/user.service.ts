import { IUser } from "./user.interface";
import { User } from "./user.model";

 //Create User to DB Query
 export const createUserToDB = async (payload:IUser):Promise<IUser> =>{
    const user = new User(payload);
      await user.save();
      return user;
  };

  export const getUsersFromDB = async ():Promise<IUser[]> =>{
    const users = await User.find();
    return users;
  }