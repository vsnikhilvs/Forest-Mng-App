import { Role } from "./role";

export class User {
    id: number;
    firstName: string;
    lastName: string;
    username: string;
    role: Role;
    token?: string;

    constructor() {
        this.id = 0;
        this.firstName = '';
        this.lastName = '';
        this.username = '';
        this.role = Role.User;
    }
}

export interface newUser {
    email: string;
    name: string;
    password: string;
    confirmPassword: string;
    role: string
}