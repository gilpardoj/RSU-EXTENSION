import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: 'usuarios'})
export class Usuario {

    @PrimaryGeneratedColumn()
    id:number;
    
    @Column({
        type:'varchar',
        length:100,
    })
    nombre:string;
}
