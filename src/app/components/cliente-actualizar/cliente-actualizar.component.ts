import { Component } from '@angular/core';
import { ClienteService, Cliente } from 'src/app/services/cliente.service';

@Component({
  selector: 'app-cliente-actualizar',
  templateUrl: './cliente-actualizar.component.html',
  styleUrls: ['./cliente-actualizar.component.css']
})
export class ClienteActualizarComponent {
  idCliente: number = 0;
  cliente: Cliente = { idCliente: 0, nombreCliente: '', direccion: '', telefono: '', email: '' };
  encontrado: boolean = false;

  constructor(private clienteService: ClienteService) {}

  buscarCliente(): void {
    this.clienteService.getCliente(this.idCliente).subscribe(
      (data) => {
        this.cliente = data;
        this.encontrado = true;
      },
      (error) => {
        console.error(error);
        this.encontrado = false;
        alert('Cliente no encontrado.');
      }
    );
  }

  actualizarCliente(): void {
    this.clienteService.updateCliente(this.cliente).subscribe(
      () => alert('Cliente actualizado correctamente'),
      (error) => console.error(error)
    );
  }
}

