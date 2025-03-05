import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClienteListComponent } from './components/cliente-list/cliente-list.component';
import { ClienteBuscarComponent } from './components/cliente-buscar/cliente-buscar.component';
import { ClienteCrearComponent } from './components/cliente-crear/cliente-crear.component';
import { ClienteActualizarComponent } from './components/cliente-actualizar/cliente-actualizar.component';
import { ClienteEliminarComponent } from './components/cliente-eliminar/cliente-eliminar.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent }, // Página principal
  { path: 'clientes/listar', component: ClienteListComponent },
  { path: 'clientes/buscar', component: ClienteBuscarComponent },
  { path: 'clientes/crear', component: ClienteCrearComponent },
  { path: 'clientes/actualizar', component: ClienteActualizarComponent },
  { path: 'clientes/eliminar', component: ClienteEliminarComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
