import { Component } from '@angular/core';
import {ClienteService} from "../../services/cliente.service";
import {ProveedorService} from "../../services/proveedor.service";

@Component({
  selector: 'app-proveedor-eliminar',
  templateUrl: './proveedor-eliminar.component.html',
  styleUrls: ['./proveedor-eliminar.component.css']
})
export class ProveedorEliminarComponent {
  idProveedor: number = 0;

  constructor(private proveedorService: ProveedorService) {}

  eliminarProveedor(): void {
    if (confirm(`¿Estás seguro de eliminar el proveedor con ID ${this.idProveedor}?`)) {
      this.proveedorService.deleteProveedor(this.idProveedor).subscribe(
        () => alert('Proveedor eliminado correctamente'),
        (error) => console.error(error)
      );
    }
  }

}
