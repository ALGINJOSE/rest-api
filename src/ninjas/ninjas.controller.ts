import { Body, Controller, Delete, Get, NotFoundException, Param, Post, Put, Query } from '@nestjs/common';
import { CreateNinjaDto } from './dto/create-ninjas.dto';
import { UpdateNinjaDto } from './dto/update-ninjas.dto';
import { NinjasService } from './ninjas.service';
import { Ninjas } from './entities/ninjas.entity';


@Controller('ninjas')
export class NinjasController {
    constructor(private readonly ninjasService: NinjasService){

    }

    @Get()
    async getNinjas() {
        try {
            return await this.ninjasService.getNinjas();
        } catch (error) {
            throw error;
        }
    }

    @Get(':id')
    getoneNinja(@Param('id') id: string) {
        try{
        return this.ninjasService.getNinja(+id)
    }   catch(err){
        throw new NotFoundException()
        }
        
    };
    

    @Post()
    async createNinja(@Body() createNinjaDto: CreateNinjaDto) {
        try {
            return await this.ninjasService.createNinjas(createNinjaDto);
        } catch (error) {
            throw error;
        }
    }

    @Put(':id')
    async updateNinja(@Param('id') id: string, @Body() updateNinjaDto: UpdateNinjaDto) {
        try {
            return await this.ninjasService.updateNinjas(+id, updateNinjaDto);
        } catch (error) {
            throw error;
        }
    }

    @Delete(':id')
    async deleteNinja(@Param('id') id: string) {
        try {
            return await this.ninjasService.removeNinjas(+id);
        } catch (error) {
            throw error;
        }
    }
}

