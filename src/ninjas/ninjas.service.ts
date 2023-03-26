import { Injectable } from '@nestjs/common';

import { CreateNinjaDto } from './dto/create-ninja.dto';
import { UpdateNinjaDto } from './dto/update-ninja.dto';

@Injectable()
export class NinjasService {
    ninjas: { id: number, name: string, weapon: string }[] = [
        { id: 1, name: "ninjaA", weapon: "stick" },
        { id: 2, name: "ninjaB", weapon: "stars" }
    ]
    getNinja() {
        return this.ninjas;
    }

    getNinjaByWeapon(weapon: string) {
        let answer: { id: number, name: string, weapon: string }[] = [];
        this.ninjas.forEach(ninja => {
            if (ninja.weapon === weapon) {
                answer.push(ninja);
            }
        })
        return answer;
    }

    createNinja(createNinjaDto: CreateNinjaDto) {
        const newNinja = {
            ...createNinjaDto,
            id: Date.now()
        }
        this.ninjas.push(newNinja);
        return newNinja;
    }

    updateNinja(id: number, updateNinjaDto: UpdateNinjaDto) {
        this.ninjas.forEach(ninja => {
            if (ninja.id == id) {
                let tmp: number = id;
                let newninja = {
                    ...updateNinjaDto,
                    id
                    // at this time we need to fix bug
                }
                ninja = ninja;
                this.ninjas.push(newninja)
            }
        })
    }
}
