export type TGuardian = {
    fathersName: string;
    mothersName: string;
    phoneNo: string;
  }
  export type TLocalGuardian = {
    name: string;
    relation: string;
    phoneNo: string;
  }
  export type TUserName = {
    firstName: string;
    middlename?: string;
    lastName: string;
  }
  
  export type TStudent = {
    _id: string;
    user: string;
    name: TUserName;
    gender: 'male' | 'female' | 'other';
    dateOfBirth: string;
    email: string;
    contactNo: string;
    emergencyContactNo: string;
    presentAddress: string;
    permanentAddress: string;
    guardian: TGuardian;
    localGuardian: TLocalGuardian;
    profileImage: string;
    addmissionSemester: string;
    isDeleted: boolean;
    academicDepartment: string;
    key?: string,
  }