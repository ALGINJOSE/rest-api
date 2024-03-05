import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { NinjasModule } from './ninjas/ninjas.module';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './users/entities/user.entity';
import { Ninjas } from './ninjas/entities/ninjas.entity';
import { NinjasController } from './ninjas/ninjas.controller';

@Module({
  imports: [
    
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5433,
      username: 'postgres',
      password: 'AS143283*',
      database: 'postgres',
      synchronize: true,
      entities: [Ninjas],
    }),
    
    NinjasModule, UsersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}