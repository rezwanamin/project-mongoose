// import express, { Application, NextFunction, Request, Response } from "express";
// import cors from 'cors';
// import { Schema, model } from "mongoose";

// const app: Application = express();


// //using cors
// app.use(cors());

// //parse data
// app.use(express.json());
// app.use(express.urlencoded({extended: true}));

// app.get('/', (req: Request, res: Response, next: NextFunction) => {
    
//     //inserting data in monoDB

//     /*
//         Step1: Interface
//         Step2: Schema
//         STep3: Model
//         Step4: Database Query
//     */

//         //Creating an interface
//         interface IUser {
//             id: string;
//             role: 'student';
//             password: string;
//             name: {
//                 firstName: string;
//                 middleName: string;
//                 lastName: string;
//             };
//             datePfBirth?: string;
//             gender: "male" | "female";
//             email?: string;
//             contactNo: string;
//             emergencyContact: string;
//             presentAddress: string;
//             permanentAddress: string;
//         }

//         //Creating Schema using Interface
//         const userSchema = new Schema<IUser>({
//             id: {type: String, required: true, unique:true},
//             role: {type: String, required: true},
//             password: {type: String, required: true},
//             name: { 
//                 firstName: {type: String, required: true},
//                 middleName: {type: String},
//                 lastName: {type: String, required: true},
//              },
//             datePfBirth: {type: String},
//             gender: {type: String, required: true, enum: ['male', 'female']},
//             email: {type: String},
//             contactNo: {type: String, required: true},
//             emergencyContact: {type: String, required: true},
//             presentAddress: {type: String, required: true},
//             permanentAddress: {type: String, required: true},
//           });

//           //Creating Model
//           const User = model<IUser>('User', userSchema);


//           //Create User to DB Query
//           const createUserToDB = async () =>{
//             const user = new User({
//                 id: '9880',
//                 role: 'student',
//                 password: 'Abc123',
//                 name: {
//                     firstName: 'Raihatal',
//                     middleName: 'Zannat',
//                     lastName: 'Amin',
//                 },
//                 gender: "male",
//                 email: 'abc@gmail.com',
//                 contactNo: '01725237423',
//                 emergencyContact: '01898478164',
//                 presentAddress: 'Uganda',
//                 permanentAddress: 'USA',
//               });
//               await user.save();
//               console.log(user);
//           }
          

//           createUserToDB();
    
    
//     // res.send('Hello World!');
//     // next();
//   });

// export default app;