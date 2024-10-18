import { Injectable } from '@nestjs/common';
import { User } from './user.model';
import { InjectModel } from '@nestjs/sequelize';
import { UserCreationData } from 'src/types/UserData';

@Injectable()
export class UsersService {

    constructor(@InjectModel(User) private readonly userModel: typeof User) {}

    async findByEmail(email: string) {
        return await this.userModel.findAll({ where: { email } })
    }

    async findByUsername(username: string) {
        return await this.userModel.findAll({ where: { username } })
    }

    async create(user: UserCreationData) {
        return await this.userModel.create(user)
    }
}
