import { Body, Controller, Delete, Get, NotFoundException, Param, Post, Put, Query } from '@nestjs/common';
import { CreateNinjaDto } from './dto/create-ninjas.dto';
import { UpdateNinjaDto } from './dto/update-ninjas.dto';
import { NinjasService } from './ninjas.service';
import { Ninjas } from './entities/ninjas.entity';

// const service = new NinjasService();
// const controller = new NinjasController(service);

@Controller('ninjas')
export class NinjasController {
    constructor(private readonly ninjasService: NinjasService){

    }

    @Get()
    async getNinjas() {
        try {
            return await this.ninjasService.getNinjas();
        } catch (error) {
            // Handle error
            // You can choose to log the error or return a custom response
            throw error; // Rethrow the error to let NestJS handle it
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
            // Handle error
            // You can choose to log the error or return a custom response
            throw error; // Rethrow the error to let NestJS handle it
        }
    }

    @Put(':id')
    async updateNinja(@Param('id') id: string, @Body() updateNinjaDto: UpdateNinjaDto) {
        try {
            return await this.ninjasService.updateNinjas(+id, updateNinjaDto);
        } catch (error) {
            // Handle error
            // You can choose to log the error or return a custom response
            throw error; // Rethrow the error to let NestJS handle it
        }
    }

    @Delete(':id')
    async deleteNinja(@Param('id') id: string) {
        try {
            return await this.ninjasService.removeNinjas(+id);
        } catch (error) {
            // Handle error
            // You can choose to log the error or return a custom response
            throw error; // Rethrow the error to let NestJS handle it
        }
    }
}

