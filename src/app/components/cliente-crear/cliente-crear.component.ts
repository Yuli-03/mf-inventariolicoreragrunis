import { Component } from '@angular/core';
import { ClienteService, Cliente } from 'src/app/services/cliente.service';

@Component({
  selector: 'app-cliente-crear',
  templateUrl: './cliente-crear.component.html',
  styleUrls: ['./cliente-crear.component.css']
})
export class ClienteCrearComponent {
  nuevoCliente: Cliente = { idCliente: 0, nombreCliente: '', direccion: '', telefono: '', email: '' };

  constructor(private clienteService: ClienteService) {}

  agregarCliente(): void {
    this.clienteService.createCliente(this.nuevoCliente).subscribe(
      () => alert('Cliente agregado correctamente'),
      (error) => console.error(error)
    );
  }
}
