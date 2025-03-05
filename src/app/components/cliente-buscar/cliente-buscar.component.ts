import { Component } from '@angular/core';
import { ClienteService, Cliente } from 'src/app/services/cliente.service';

@Component({
  selector: 'app-cliente-buscar',
  templateUrl: './cliente-buscar.component.html',
  styleUrls: ['./cliente-buscar.component.css']
})
export class ClienteBuscarComponent {
  idCliente: number = 0;
  cliente: Cliente | null = null;

  constructor(private clienteService: ClienteService) {}

  buscarCliente(): void {
    this.clienteService.getCliente(this.idCliente).subscribe(
      (data) => this.cliente = data,
      (error) => console.error(error)
    );
  }
}
