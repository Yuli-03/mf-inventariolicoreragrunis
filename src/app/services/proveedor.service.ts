import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Cliente} from "./cliente.service";

export interface Proveedor {
  idProveedor: number;
  nombre: string;
  direccion: string;
  telefono: string;
  email: string;
}

@Injectable({
  providedIn: 'root'
})
export class ProveedorService {
  private apiUrl = 'http://localhost:8080/mslicorerainventario/controller';

  constructor(private http: HttpClient) { }

  getProveedor(idProveedor: number): Observable<Proveedor> {
    return this.http.get<Proveedor>(`${this.apiUrl}/get/proveedor/${idProveedor}`);
  }

  getListProveedores(): Observable<Proveedor[]> {
    return this.http.get<Proveedor[]>(`${this.apiUrl}/get/list-proveedores`);
  }

  createProveedor(proveedor: Proveedor): Observable<any> {
    return this.http.post(`${this.apiUrl}/post/proveedor`, proveedor);
  }

  updateProveedor(proveedor: Proveedor): Observable<any> {
    return this.http.put(`${this.apiUrl}/put/proveedor`, proveedor);
  }

  deleteProveedor(idProveedor: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/delete/proveedor/${idProveedor}`);
  }
}
