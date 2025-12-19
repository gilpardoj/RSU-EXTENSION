import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: 'roles'})
export class Role {

    @PrimaryGeneratedColumn()
    id:number;

    @Column({
        type:'varchar',
        length:100,

    })
    nombre:string;
    @Column({
        type:'varchar',
        length:255,
    })
    descripcion:string;
}
