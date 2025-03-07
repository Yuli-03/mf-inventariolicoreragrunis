import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Proveedor} from "./proveedor.service";

export interface Categoria {
  idCategoria: number;
  nombreCategoria: string;
}

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  private apiUrl = 'http://localhost:8080/mslicorerainventario/controller';

  constructor(private http: HttpClient) { }

  getCategoria(idCategoria: number): Observable<Categoria> {
    return this.http.get<Categoria>(`${this.apiUrl}/get/categoria/${idCategoria}`);
  }

  getListCategorias(): Observable<Categoria[]> {
    return this.http.get<Categoria[]>(`${this.apiUrl}/get/list-categorias`);
  }

  createCategoria(categoria: Categoria): Observable<any> {
    return this.http.post(`${this.apiUrl}/post/categoria`, categoria);
  }

  updateCategoria(categoria: Categoria): Observable<any> {
    return this.http.put(`${this.apiUrl}/put/categoria`, categoria);
  }

  deleteCategoria(idCategoria: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/delete/categoria/${idCategoria}`);
  }

}
