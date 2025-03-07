import { Component } from '@angular/core';
import {Proveedor, ProveedorService} from "../../services/proveedor.service";
import {Categoria, CategoriaService} from "../../services/categoria.service";

@Component({
  selector: 'app-categoria-buscar',
  templateUrl: './categoria-buscar.component.html',
  styleUrls: ['./categoria-buscar.component.css']
})
export class CategoriaBuscarComponent {

  idCategoria: number = 0;
  categoria: Categoria | null = null;

  constructor(private categoriaService: CategoriaService) {}

  buscarCategoria(): void {
    this.categoriaService.getCategoria(this.idCategoria).subscribe(
      (data) => this.categoria = data,
      (error) => console.error(error)
    );
  }

}
