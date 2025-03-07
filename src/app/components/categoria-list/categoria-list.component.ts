import {Component, OnInit} from '@angular/core';
import {Proveedor, ProveedorService} from "../../services/proveedor.service";
import {Categoria, CategoriaService} from "../../services/categoria.service";

@Component({
  selector: 'app-categoria-list',
  templateUrl: './categoria-list.component.html',
  styleUrls: ['./categoria-list.component.css']
})
export class CategoriaListComponent implements OnInit {

  categorias: Categoria[] = [];

  constructor(private categoriaService: CategoriaService) {}

  ngOnInit(): void {
    this.cargarCategorias();
  }

  cargarCategorias(): void {
    this.categoriaService.getListCategorias().subscribe(
      (data) => this.categorias = data,
      (error) => console.error(error)
    );
  }

}
