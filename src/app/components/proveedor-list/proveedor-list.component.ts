import {Component, OnInit} from '@angular/core';
import {Cliente, ClienteService} from "../../services/cliente.service";
import {Proveedor, ProveedorService} from "../../services/proveedor.service";

@Component({
  selector: 'app-proveedor-list',
  templateUrl: './proveedor-list.component.html',
  styleUrls: ['./proveedor-list.component.css']
})
export class ProveedorListComponent implements OnInit{
  proveedores: Proveedor[] = [];

  constructor(private proveedorService: ProveedorService) {}

  ngOnInit(): void {
    this.cargarProveedores();
  }

  cargarProveedores(): void {
    this.proveedorService.getListProveedores().subscribe(
      (data) => this.proveedores = data,
      (error) => console.error(error)
    );
  }

}
