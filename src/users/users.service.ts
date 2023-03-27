import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
    private users: { id: number, name: string, age: number }[] = [{ id: 1, name: "Vu Tuan Linh", age: 20 }];

    getAllUser(): User[] {
        return this.users;
    }

    getUserById(id: number): User {
        let tmp = this.users.find(user => user.id === id);
        if (!tmp) {
            throw new HttpException({ name: "Vu Tuan Linh" }, HttpStatus.BAD_REQUEST);
        }
        return tmp;
    }

    createUser(obj: CreateUserDto): User {
        const newObj = {
            id: Date.now(),
            ...obj
        }
        console.log(typeof newObj.id);
        this.users.push(newObj);
        return newObj;
    }
}
