import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ReservasDTO } from './reservas.dto';
import { Reserva, ReservaDocument } from './schema/reservas.schema';

@Injectable()
export class ReservasService {
  constructor(@InjectModel(Reserva.name) private reservaModel: Model<ReservaDocument>) {}

  async todos(): Promise<Reserva[]> {
    return await this.reservaModel.find().exec();
  }

  async uno(id: string): Promise<Reserva> {
    return await this.reservaModel.findById(id).exec();
  }

  async insertar(reserva: ReservasDTO): Promise<Reserva> {
    const nuevaReserva = new this.reservaModel(reserva);
    return await nuevaReserva.save();
  }

  async actualizar(id: string, reservaActualizar: ReservasDTO): Promise<Reserva> {
    return await this.reservaModel.findByIdAndUpdate(id, reservaActualizar, { new: true }).exec();
  }

  async eliminar(id: string): Promise<string> {
    await this.reservaModel.findByIdAndDelete(id).exec();
    return 'Reserva Eliminada';
  }
}
