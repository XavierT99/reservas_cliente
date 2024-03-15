import { Injectable } from '@nestjs/common';
import { v4 as uuidV4 } from 'uuid';
import { IReserva } from './reservas.interfaces';
import { ReservasDTO } from './reservas.dto';

@Injectable()
export class ReservasService {
  //constructor() {
  //  const clientS = new ClientesService();
  //  clientS.uno('1');
  // const relacion = {
  //   idcliente : '',
  //   idReserva:''
  //};
  // }

  reservas: IReserva[] = [
    {
      id: '1',
      tamanio: 'grande',
      habitaciones: '2',
      estado: 'libre',
      precio: '50',
    },
    {
      id: '2',
      tamanio: 'pequeña',
      habitaciones: '1',
      estado: 'libre',
      precio: '25',
    },
  ];
  todos() {
    return this.reservas;
  }

  uno(id: string) {
    return this.reservas.find((reservas) => reservas.id == id);
  }

  insertar(Reservas: ReservasDTO) {
    const reserv = {
      id: uuidV4(),
      ...this.reservas,
    };
    this.reservas.push(reserv);
    return this.reservas;
  }

  actualizar(id: string, reservasActualizar: ReservasDTO) {
    const nuevoemp = { id, ...reservasActualizar };
    this.reservas = this.reservas.map((empleado) =>
      empleado.id === id ? nuevoemp : empleado,
    );
    return nuevoemp;
  }

  eliminar(id: string) {
    this.reservas = this.reservas.filter((reservas) => reservas.id !== id);
    return 'Reserva Eliminada';
  }
}
