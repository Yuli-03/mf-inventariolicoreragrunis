import { Component } from '@angular/core';
import {ProveedorService} from "../../services/proveedor.service";
import {CategoriaService} from "../../services/categoria.service";

@Component({
  selector: 'app-categoria-eliminar',
  templateUrl: './categoria-eliminar.component.html',
  styleUrls: ['./categoria-eliminar.component.css']
})
export class CategoriaEliminarComponent {

  idCategoria: number = 0;

  constructor(private categoriaService: CategoriaService) {}

  eliminarCategoria(): void {
    if (confirm(`¿Estás seguro de eliminar la categoria con ID ${this.idCategoria}?`)) {
      this.categoriaService.deleteCategoria(this.idCategoria).subscribe(
        () => alert('Categoria eliminada correctamente'),
        (error) => console.error(error)
      );
    }
  }

}
