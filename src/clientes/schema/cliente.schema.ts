import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ClienteDocument = Cliente & Document;

@Schema()
export class Cliente {
  @Prop({ required: true })
  nombres: string;

  @Prop({ required: true })
  apellidos: string;

  @Prop({ required: true })
  edad: number;

  @Prop({ required: true })
  cedula: string;
}

export const ClienteSchema = SchemaFactory.createForClass(Cliente);
