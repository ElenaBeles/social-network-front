export interface Profile {
    university?: string;
    user: Partial<User>;
    age?: number;
    userId?: number;
}

export interface User {
    id: number;
    first_name: string;
    last_name: string;
    phone: string;
    email: string;
    password?: string;
}