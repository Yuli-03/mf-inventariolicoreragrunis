import { Component } from '@angular/core';
import {Proveedor, ProveedorService} from "../../services/proveedor.service";
import {Categoria, CategoriaService} from "../../services/categoria.service";

@Component({
  selector: 'app-categoria-actualizar',
  templateUrl: './categoria-actualizar.component.html',
  styleUrls: ['./categoria-actualizar.component.css']
})
export class CategoriaActualizarComponent {

  idCategoria: number = 0;
  categoria: Categoria = { idCategoria: 0, nombreCategoria: ''};
  encontrado: boolean = false;

  constructor(private categoriaService : CategoriaService ) {}

  buscarCategoria(): void {
    this.categoriaService.getCategoria(this.idCategoria).subscribe(
      (data) => {
        this.categoria = data;
        this.encontrado = true;
      },
      (error) => {
        console.error(error);
        this.encontrado = false;
        alert('Categoria no encontrada.');
      }
    );
  }

  actualizarCategoria(): void {
    this.categoriaService.updateCategoria(this.categoria).subscribe(
      () => alert('Categoria actualizada correctamente'),
      (error) => console.error(error)
    );
  }

}
