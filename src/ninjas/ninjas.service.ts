import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateNinjaDto } from './dto/create-ninjas.dto';
import { UpdateNinjaDto } from './dto/update-ninjas.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Ninjas } from './entities/ninjas.entity';
import { Repository } from 'typeorm';

@Injectable()
export class NinjasService {
    constructor(
        @InjectRepository(Ninjas) private readonly NinjasRepository: Repository<Ninjas>,
    ) {}

    async getNinjas(): Promise<Ninjas[]> {
        try {
            return await this.NinjasRepository.find();
        } catch (error) {
            throw new Error('Error occurred while retrieving ninjas.');
        }
    }

    async getNinja(id: number): Promise<Ninjas> {
        try {
            const ninja = await this.NinjasRepository.findOne({ where: { id } });
            if (!ninja) {
                throw new NotFoundException('Ninja not found');
            }
            return ninja;
        } catch (error) {
            throw new Error('Error occurred while retrieving ninja.');
        }
    }

    async createNinjas(createNinjaDto: CreateNinjaDto): Promise<Ninjas> {
        try {
            const ninja: Ninjas = new Ninjas();
            ninja.name = createNinjaDto.name;
            ninja.weapon = createNinjaDto.weapon;
            return this.NinjasRepository.save(ninja);
        } catch (error) {
            throw new Error('Error occurred while creating ninja.');
        }
    }

    async updateNinjas(id: number, updateNinjaDto: UpdateNinjaDto): Promise<Ninjas> {
        try {
            const ninja: Ninjas = new Ninjas();
            ninja.name = updateNinjaDto.name;
            ninja.weapon = updateNinjaDto.weapon;
            ninja.id = id;
            return this.NinjasRepository.save(ninja);
        } catch (error) {
            throw new Error('Error occurred while updating ninja.');
        }
    }

    async removeNinjas(id: number): Promise<{ affected?: number }> {
        try {
            return this.NinjasRepository.delete(id);
        } catch (error) {
            throw new Error('Error occurred while deleting ninja.');
        }
    }
}
