import { BadRequestException, Injectable } from '@nestjs/common';
import { User } from './user.model';
import { InjectModel } from '@nestjs/sequelize';
import { UserCreationData, UserUpdateData } from 'src/types/UserData';
import { UpdateMeDto } from './dto/updateMeDto';
import { hashPassword } from 'src/utils';

@Injectable()
export class UsersService {

    constructor( @InjectModel(User) private readonly userModel: typeof User) {}

    async findByEmail(email: string) {
        return await this.userModel.findOne({ where: { email } })
    }

    async findByUsername(username: string) {
        return await this.userModel.findOne({ where: { username } })
    }

    async create(user: UserCreationData) {
        return await this.userModel.create(user)
    }

    async getById(userId: number) {
        return await this.userModel.findByPk(userId)
    }

    async update(userId: number, updateDto: UpdateMeDto) {
        const data: UserUpdateData = {}

        if (updateDto.email) {
            const userFound = await this.findByEmail(updateDto.email)
            if (userFound && userFound.id !== userId) throw new BadRequestException("Email unavailable")
            data.email = updateDto.email
        }

        if (updateDto.username) {
            const userFound = await this.findByUsername(updateDto.username)
            if (userFound && userFound.id !== userId) throw new BadRequestException("Username unavailable")
            data.username = updateDto.username
        }

        if (updateDto.password) data.password = await hashPassword(updateDto.password)
        if (updateDto.phoneNumber) data.phoneNumber = updateDto.phoneNumber

        await this.userModel.update(data, { where: { id: userId } })
    }
}
