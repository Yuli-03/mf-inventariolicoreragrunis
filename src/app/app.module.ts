import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from "@angular/common/http";
import { ClienteListComponent } from './components/cliente-list/cliente-list.component';
import { HomeComponent } from './components/home/home.component';
import { ClienteBuscarComponent } from './components/cliente-buscar/cliente-buscar.component';
import { ClienteCrearComponent } from './components/cliente-crear/cliente-crear.component';
import { ClienteActualizarComponent } from './components/cliente-actualizar/cliente-actualizar.component';
import { ClienteEliminarComponent } from './components/cliente-eliminar/cliente-eliminar.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { ProveedorActualizarComponent } from './components/proveedor-actualizar/proveedor-actualizar.component';
import { ProveedorBuscarComponent } from './components/proveedor-buscar/proveedor-buscar.component';
import { ProveedorCrearComponent } from './components/proveedor-crear/proveedor-crear.component';
import { ProveedorEliminarComponent } from './components/proveedor-eliminar/proveedor-eliminar.component';
import { ProveedorListComponent } from './components/proveedor-list/proveedor-list.component';
import { CategoriaActualizarComponent } from './components/categoria-actualizar/categoria-actualizar.component';
import { CategoriaBuscarComponent } from './components/categoria-buscar/categoria-buscar.component';
import { CategoriaCrearComponent } from './components/categoria-crear/categoria-crear.component';
import { CategoriaEliminarComponent } from './components/categoria-eliminar/categoria-eliminar.component';
import { CategoriaListComponent } from './components/categoria-list/categoria-list.component';
import { LoginComponent } from './components/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    ClienteListComponent,
    HomeComponent,
    ClienteBuscarComponent,
    ClienteCrearComponent,
    ClienteActualizarComponent,
    ClienteEliminarComponent,
    ProveedorActualizarComponent,
    ProveedorBuscarComponent,
    ProveedorCrearComponent,
    ProveedorEliminarComponent,
    ProveedorListComponent,
    CategoriaActualizarComponent,
    CategoriaBuscarComponent,
    CategoriaCrearComponent,
    CategoriaEliminarComponent,
    CategoriaListComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
