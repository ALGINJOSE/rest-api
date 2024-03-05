import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()

export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({type:'varchar', length:30})
    name:string;

    @Column({type:'varchar', length:20})
    name1:string;

    @Column({type:'varchar', length:10})
    name2:string
}