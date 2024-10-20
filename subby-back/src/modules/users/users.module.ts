import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { User } from './user.model';
import { UsersController } from './users.controller';

@Module({
    providers: [UsersService],
    exports: [UsersService],
    imports: [SequelizeModule.forFeature([User])],
    controllers: [UsersController]
})
export class UsersModule {
    
}
