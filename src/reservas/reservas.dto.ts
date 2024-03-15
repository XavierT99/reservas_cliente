import {
    IsDate,
    IsEmail,
    IsEmpty,
    IsNotEmpty,
    IsNumber,
    IsString,
  } from 'class-validator';
  
  export class ReservasDTO {
    @IsNotEmpty({ message: 'El campo es requerido' })
    @IsString({ message: 'Se necesita un texto' })
    tamanio: string;
    @IsNotEmpty({ message: 'El campo es requerido' })
    @IsString({ message: 'Se necesita un texto' })
    habitaciones: string;
    @IsNotEmpty({ message: 'El campo es requerido' })
    @IsNumber()
    estado: string;
    @IsNotEmpty({ message: 'El campo es requerido' })
    precio: string;
   
  
    //@IsEmail()
    //email: string;
  }