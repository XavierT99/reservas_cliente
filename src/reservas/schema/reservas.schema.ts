import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ReservaDocument = Reserva & Document;

@Schema()
export class Reserva {
  @Prop({ required: true })
  tamanio: string;

  @Prop({ required: true })
  habitaciones: string;

  @Prop({ required: true })
  estado: string;

  @Prop({ required: true })
  precio: string;
}

export const ReservaSchema = SchemaFactory.createForClass(Reserva);
