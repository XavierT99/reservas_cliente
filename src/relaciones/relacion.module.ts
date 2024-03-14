import { Module } from '@nestjs/common';
import { RelacionRealizaController } from './relacion.controller';
import { RelacionService } from './relacion.service';

@Module({
  controllers: [RelacionRealizaController],
  providers: [RelacionService]
})
export class RelacionRealizaModule {}
