import { Component } from '@angular/core';
import {Proveedor, ProveedorService} from "../../services/proveedor.service";
import {Categoria, CategoriaService} from "../../services/categoria.service";

@Component({
  selector: 'app-categoria-crear',
  templateUrl: './categoria-crear.component.html',
  styleUrls: ['./categoria-crear.component.css']
})
export class CategoriaCrearComponent {
  nuevaCategoria: Categoria = { idCategoria: 0, nombreCategoria: ''};

  constructor(private categoriaService: CategoriaService) {}

  agregarCategoria(): void {
    this.categoriaService.createCategoria(this.nuevaCategoria).subscribe(
      () => alert('Categoria agregada correctamente'),
      (error) => console.error(error)
    );
  }

}
