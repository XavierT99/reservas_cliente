import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClientesModule } from './clientes/clientes.module';
import { ReservasModule } from './reservas/reservas.module';
  

@Module({
  imports: [ClientesModule, ReservasModule,],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
