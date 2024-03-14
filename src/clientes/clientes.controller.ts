import { ClienteDTO } from './cliente.dto';
import { ClientesService } from './clientes.service';
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
@Controller('clientes')
export class ClientesController {
  constructor(private clientesService: ClientesService) {}
  @Get()
  todos() {
    return this.clientesService.todos();
  }
  @Get(':id')
  uno(@Param('id') id: string) {
    return this.clientesService.uno(id);
  }

  @Post()
  insertar(@Body() cliente: ClienteDTO) {
    return this.clientesService.insertar(cliente);
  }


  @Put(':id')
  actualizar(@Param('id') id: string, @Body() cliente: ClienteDTO) {
    return this.clientesService.actualizar(id, cliente);
  }


  
  @Delete(':id')
  eliminar(@Param('id') id: string) {
    return this.clientesService.eliminar(id);
  }
}
