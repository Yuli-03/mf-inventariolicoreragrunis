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

const routes: Routes = [
  {
    path: '',
    component: HomeComponent, // El sidebar siempre se mantiene
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
      { path: '', redirectTo: 'clientes/listar', pathMatch: 'full' } // Redirección inicial
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
