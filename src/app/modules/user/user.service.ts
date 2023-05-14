import { User } from "./user.model";

 //Create User to DB Query
 export const createUserToDB = async () =>{
    const user = new User({
        id: '000000000000',
        role: 'student',
        password: 'Abc123',
        name: {
            firstName: 'Mr.',
            middleName: 'Test',
            lastName: '3',
        },
        gender: "male",
        email: 'abc@gmail.com',
        contactNo: '01725237423',
        emergencyContact: '01898478164',
        presentAddress: 'Uganda',
        permanentAddress: 'USA',
      });
      await user.save();
      return user;
  };

  export const getUsersFromDB = async () =>{
    const users = await User.find();
    return users;
  }