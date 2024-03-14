import { Injectable } from '@nestjs/common';
import { ClientesService } from 'src/clientes/clientes.service';

@Injectable()
export class ReservasService {
  constructor() {
    const clientS = new ClientesService();
    clientS.uno('1');
    const relacion = {
      idcliente : '',
      idReserva:''
    };
  }
}
