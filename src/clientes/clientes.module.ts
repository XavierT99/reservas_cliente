import { Module } from '@nestjs/common';

import { ClientesController } from './clientes.controller';
import { ClientesService } from './clientes.service';
import { Cliente, ClienteSchema } from './schema/cliente.schema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Cliente.name, schema: ClienteSchema }]), 
  ],
  controllers: [ClientesController],
  providers: [ClientesService]
})
export class ClientesModule {}
