export interface IAdmin {
    id: number; // Optional, as it may not be present when creating a new admin
    name:string,
    email: string;
    password: string;
}
