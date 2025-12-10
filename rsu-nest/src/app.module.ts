import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';

//se debe poner el mudulo princiapl de la app
//archivo donde esta ubicado mi base de datos
//app.module.ts
@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DB_HOST,
      port: +process.env.DB_PORT,
      username: process.env.DB_USER,
      password: process.env.Josue2008,
      database: process.env.Prueba_db,
      autoLoadEntities: true,
      synchronize: true,
    })
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
