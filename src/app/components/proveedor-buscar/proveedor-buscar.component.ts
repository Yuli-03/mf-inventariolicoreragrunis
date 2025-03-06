import { Component } from '@angular/core';
import {Cliente, ClienteService} from "../../services/cliente.service";
import {Proveedor, ProveedorService} from "../../services/proveedor.service";

@Component({
  selector: 'app-proveedor-buscar',
  templateUrl: './proveedor-buscar.component.html',
  styleUrls: ['./proveedor-buscar.component.css']
})
export class ProveedorBuscarComponent {

  idProveedor: number = 0;
  proveedor: Proveedor | null = null;

  constructor(private proveedorService: ProveedorService) {}

  buscarProveedor(): void {
    this.proveedorService.getProveedor(this.idProveedor).subscribe(
      (data) => this.proveedor = data,
      (error) => console.error(error)
    );
  }

}
