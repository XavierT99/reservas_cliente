import { ReservasDTO } from './reservas.dto';
import { ReservasService } from './reservas.service';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
@Controller('reservas')
export class ReservasController {
  constructor(private reservasService: ReservasService) {}
  @Get()
  todos() {
    return this.reservasService.todos();
  }
  @Get(':id')
  uno(@Param('id') id: string) {
    return this.reservasService.uno(id);
  }

  @Post()
  insertar(@Body() reservas: ReservasDTO) {
    return this.reservasService.insertar(reservas);
  }


  @Put(':id')
  actualizar(@Param('id') id: string, @Body() reservas: ReservasDTO) {
    return this.reservasService.actualizar(id, reservas);
  }
}