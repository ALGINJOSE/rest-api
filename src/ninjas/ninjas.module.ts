import { Module } from '@nestjs/common';
import { NinjasController } from './ninjas.controller';
import { NinjasService } from './ninjas.service';
import { Ninjas } from './entities/ninjas.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({

  imports: [TypeOrmModule.forFeature([Ninjas])],
  controllers: [NinjasController],
  providers: [NinjasService]
})
export class NinjasModule {}
