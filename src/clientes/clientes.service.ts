import { Injectable } from '@nestjs/common';
import { ICliente } from './cliente.interfaces';
import { ClienteDTO } from './cliente.dto';
import { v4 as uuidV4 } from 'uuid';
@Injectable()
export class ClientesService {
  clientes: ICliente[] = [
    {
    id:"1",
    nombres:"Xavier",
    apellidos:"Torres",
    edad:24,
    cedula:"1003677091"},
    {
    id:"2",
    nombres:"Xavier",
    apellidos:"Torres",
    edad:24,
    cedula:"1003677091"}
];
  todos() {
    return this.clientes;
  }

  uno(id: string) {
    return this.clientes.find((cliente) => cliente.id == id);
  }
 
  insertar(cliente: ClienteDTO) {
    const client = {
        id: uuidV4(),
        ...cliente,
      };
      this.clientes.push(client);
      return this.clientes;
  }

  actualizar(id: string, clienteActualizar: ClienteDTO) {
    const nuevoemp = { id, ...clienteActualizar };
    this.clientes = this.clientes.map((empleado) =>
      empleado.id === id ? nuevoemp : empleado,
    );
    return nuevoemp;
  }

  eliminar(id: string) {
    this.clientes = this.clientes.filter((cliente) => cliente.id !== id);
    return 'Cliente Eliminado';
  }

}
