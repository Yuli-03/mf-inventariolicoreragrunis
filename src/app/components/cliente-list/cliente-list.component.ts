import {Component, OnInit} from '@angular/core';
import {Cliente, ClienteService} from "../../services/cliente.service";

@Component({
  selector: 'app-cliente-list',
  templateUrl: './cliente-list.component.html',
  styleUrls: ['./cliente-list.component.css']
})
export class ClienteListComponent implements OnInit {
  clientes: Cliente[] = [];

  constructor(private clienteService: ClienteService) {}

  ngOnInit(): void {
    this.cargarClientes();
  }

  cargarClientes(): void {
    this.clienteService.getListClientes().subscribe(
      (data) => this.clientes = data,
      (error) => console.error(error)
    );
  }
}
