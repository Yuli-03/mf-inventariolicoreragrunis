import { Component } from '@angular/core';
import { ClienteService } from 'src/app/services/cliente.service';

@Component({
  selector: 'app-cliente-eliminar',
  templateUrl: './cliente-eliminar.component.html',
  styleUrls: ['./cliente-eliminar.component.css']
})
export class ClienteEliminarComponent {
  idCliente: number = 0;

  constructor(private clienteService: ClienteService) {}

  eliminarCliente(): void {
    if (confirm(`¿Estás seguro de eliminar el cliente con ID ${this.idCliente}?`)) {
      this.clienteService.deleteCliente(this.idCliente).subscribe(
        () => alert('Cliente eliminado correctamente'),
        (error) => console.error(error)
      );
    }
  }
}
