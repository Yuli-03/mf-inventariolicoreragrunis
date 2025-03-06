import { Component } from '@angular/core';
import {Cliente, ClienteService} from "../../services/cliente.service";
import {Proveedor, ProveedorService} from "../../services/proveedor.service";

@Component({
  selector: 'app-proveedor-actualizar',
  templateUrl: './proveedor-actualizar.component.html',
  styleUrls: ['./proveedor-actualizar.component.css']
})
export class ProveedorActualizarComponent {
  idProveedor: number = 0;
  proveedor: Proveedor = { idProveedor: 0, nombre: '', direccion: '', telefono: '', email: '' };
  encontrado: boolean = false;

  constructor(private proveedorService: ProveedorService) {}

  buscarProveedor(): void {
    this.proveedorService.getProveedor(this.idProveedor).subscribe(
      (data) => {
        this.proveedor = data;
        this.encontrado = true;
      },
      (error) => {
        console.error(error);
        this.encontrado = false;
        alert('Proveedor no encontrado.');
      }
    );
  }

  actualizarProveedor(): void {
    this.proveedorService.updateProveedor(this.proveedor).subscribe(
      () => alert('Proveedor actualizado correctamente'),
      (error) => console.error(error)
    );
  }

}
