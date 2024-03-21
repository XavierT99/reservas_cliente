import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ClienteDTO } from './cliente.dto';
import { Cliente, ClienteDocument } from './schema/cliente.schema';

@Injectable()
export class ClientesService {
  constructor(@InjectModel(Cliente.name) private clienteModel: Model<ClienteDocument>) {}

  async todos(): Promise<Cliente[]> {
    return await this.clienteModel.find().exec();
  }

  async uno(id: string): Promise<Cliente> {
    return await this.clienteModel.findById(id).exec();
  }
 
  async insertar(cliente: ClienteDTO): Promise<Cliente> {
    const nuevoCliente = new this.clienteModel(cliente);
    return await nuevoCliente.save();
  }

  async actualizar(id: string, clienteActualizar: ClienteDTO): Promise<Cliente> {
    return await this.clienteModel.findByIdAndUpdate(id, clienteActualizar, { new: true }).exec();
  }

  async eliminar(id: string): Promise<string> {
    await this.clienteModel.findByIdAndDelete(id).exec();
    return 'Cliente Eliminado';
  }
}
