import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsuariosModule } from './veterinaria/usuarios/usuarios.module';
import { RolesModule } from './veterinaria/roles/roles.module';

//se debe poner el mudulo princiapl de la app
//archivo donde esta ubicado mi base de datos
//app.module.ts
@Module({
  imports: [UsuariosModule, 
            ConfigModule.forRoot({ isGlobal: true }),
            TypeOrmModule.forRoot({
              type:'mysql',
              host:'localhost',
              port: 3306,
              username:'root',
              password:'fikmortvy02479bd',
              database:'rsu_prueba',
              autoLoadEntities: true,   // <-- carga entidades registradas con forFeature
              synchronize: true, 
            }),
            RolesModule
          ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
