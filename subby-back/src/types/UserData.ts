import { Optional } from 'sequelize';

export interface UserData {
    username: string;
    email: string;
    password: string;
    phoneNumber?: string;
    googleId?: string;
}

export type UserCreationData = Optional<UserData, 'phoneNumber' | 'googleId'>;
