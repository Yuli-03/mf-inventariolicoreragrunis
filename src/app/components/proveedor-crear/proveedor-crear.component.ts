import { Component } from '@angular/core';
import {Cliente, ClienteService} from "../../services/cliente.service";
import {Proveedor, ProveedorService} from "../../services/proveedor.service";

@Component({
  selector: 'app-proveedor-crear',
  templateUrl: './proveedor-crear.component.html',
  styleUrls: ['./proveedor-crear.component.css']
})
export class ProveedorCrearComponent {

  nuevoProveedor: Proveedor = { idProveedor: 0, nombre: '', direccion: '', telefono: '', email: '' };

  constructor(private proveedorService: ProveedorService) {}

  agregarProveedor(): void {
    this.proveedorService.createProveedor(this.nuevoProveedor).subscribe(
      () => alert('Proveedor agregado correctamente'),
      (error) => console.error(error)
    );
  }

}
