import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  processData(data: any): string {
    // Lógica para procesar los datos recibidos
    return `Data processed: ${JSON.stringify(data)}`;
  }
}
jsjsjsjs me gusta yampi()
