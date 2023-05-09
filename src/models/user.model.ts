export interface Profile {
    id: number;
    first_name: string;
    last_name: string;
    phone: string;
    university?: string;
    age?: number;
}

export interface User {
    first_name: string;
    last_name: string;
    phone: string;
    email: string;
    password: string;
}