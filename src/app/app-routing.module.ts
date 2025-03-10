import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClienteListComponent } from './components/cliente-list/cliente-list.component';
import { ClienteBuscarComponent } from './components/cliente-buscar/cliente-buscar.component';
import { ClienteCrearComponent } from './components/cliente-crear/cliente-crear.component';
import { ClienteActualizarComponent } from './components/cliente-actualizar/cliente-actualizar.component';
import { ClienteEliminarComponent } from './components/cliente-eliminar/cliente-eliminar.component';
import { HomeComponent } from './components/home/home.component';
import {ProveedorListComponent} from "./components/proveedor-list/proveedor-list.component";
import {ProveedorBuscarComponent} from "./components/proveedor-buscar/proveedor-buscar.component";
import {ProveedorCrearComponent} from "./components/proveedor-crear/proveedor-crear.component";
import {ProveedorActualizarComponent} from "./components/proveedor-actualizar/proveedor-actualizar.component";
import {ProveedorEliminarComponent} from "./components/proveedor-eliminar/proveedor-eliminar.component";
import {CategoriaListComponent} from "./components/categoria-list/categoria-list.component";
import {CategoriaBuscarComponent} from "./components/categoria-buscar/categoria-buscar.component";
import {CategoriaCrearComponent} from "./components/categoria-crear/categoria-crear.component";
import {CategoriaActualizarComponent} from "./components/categoria-actualizar/categoria-actualizar.component";
import {CategoriaEliminarComponent} from "./components/categoria-eliminar/categoria-eliminar.component";
import {LoginComponent} from "./components/login/login.component";

const routes: Routes = [
  // Ruta independiente para login
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: 'login', pathMatch: 'full' }, // Redirección inicial al login

  // Rutas protegidas que requieren HomeComponent (con sidebar)
  {
    path: '',
    component: HomeComponent, // El HomeComponent solo se usará aquí
    children: [
      { path: 'clientes/listar', component: ClienteListComponent },
      { path: 'clientes/buscar', component: ClienteBuscarComponent },
      { path: 'clientes/crear', component: ClienteCrearComponent },
      { path: 'clientes/actualizar', component: ClienteActualizarComponent },
      { path: 'clientes/eliminar', component: ClienteEliminarComponent },
      { path: 'proveedores/listar', component: ProveedorListComponent },
      { path: 'proveedores/buscar', component: ProveedorBuscarComponent },
      { path: 'proveedores/crear', component: ProveedorCrearComponent },
      { path: 'proveedores/actualizar', component: ProveedorActualizarComponent },
      { path: 'proveedores/eliminar', component: ProveedorEliminarComponent },
      { path: 'categorias/listar', component: CategoriaListComponent },
      { path: 'categorias/buscar', component: CategoriaBuscarComponent },
      { path: 'categorias/crear', component: CategoriaCrearComponent },
      { path: 'categorias/actualizar', component: CategoriaActualizarComponent },
      { path: 'categorias/eliminar', component: CategoriaEliminarComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
