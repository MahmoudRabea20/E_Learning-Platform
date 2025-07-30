export interface IInstructor {
    id: number; // Optional, as it may not be present when creating a new instructor
    name: string;
    email: string;
    password: string;
    address: string;
    phone: string;
    gender: string;
    age: number;
}
