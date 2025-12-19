import { generate } from "rxjs";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'usuario' })
export class Usuario {
 
    @PrimaryGeneratedColumn()
    id:number;

    @Column({
        type: 'varchar',
        length: 100
    })
    nombre:string;

    @Column({
        type: 'varchar',
        length: 100
    })
    password:string;

    @Column({
        type: 'varchar',
        length: 200
    })
    email:string;
    
}
