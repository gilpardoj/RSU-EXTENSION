import { Injectable } from '@nestjs/common';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Usuario } from './entities/usuario.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UsuarioService {

  constructor(
    @InjectRepository(Usuario)
     private readonly repo: Repository<Usuario>,
  ) {}  

  create(createUsuarioDto: CreateUsuarioDto) {
    const  usuario =  this.repo.create(createUsuarioDto);
     return this.repo.save(usuario);
  }

  findAll() {
   return this.repo.find();
  }

  findOne(id: number) {
    return this.repo.findOne({where:{id}});
  }

  update(id: number, updateUsuarioDto: UpdateUsuarioDto) {
    return this.repo.update(id, updateUsuarioDto);
  }

  remove(id: number) {
    return this.repo.delete(id);
  }
}
