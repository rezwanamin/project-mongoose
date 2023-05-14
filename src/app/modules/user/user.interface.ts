 //Creating an interface
 export interface IUser {
    id: string;
    role: 'student';
    password: string;
    name: {
        firstName: string;
        middleName: string;
        lastName: string;
    };
    datePfBirth?: string;
    gender: "male" | "female";
    email?: string;
    contactNo: string;
    emergencyContact: string;
    presentAddress: string;
    permanentAddress: string;
};