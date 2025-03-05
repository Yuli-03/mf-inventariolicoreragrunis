import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Cliente {
  idCliente: number;
  nombreCliente: string;
  direccion: string;
  telefono: string;
  email: string;
}

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  private apiUrl = 'http://localhost:8080/mslicorerainventario/controller';

  constructor(private http: HttpClient) { }

  getCliente(idCliente: number): Observable<Cliente> {
    return this.http.get<Cliente>(`${this.apiUrl}/get/cliente/${idCliente}`);
  }

  getListClientes(): Observable<Cliente[]> {
    return this.http.get<Cliente[]>(`${this.apiUrl}/get/list-clientes`);
  }

  createCliente(cliente: Cliente): Observable<any> {
    return this.http.post(`${this.apiUrl}/post/cliente`, cliente);
  }

  updateCliente(cliente: Cliente): Observable<any> {
    return this.http.put(`${this.apiUrl}/put/cliente`, cliente);
  }

  deleteCliente(idCliente: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/delete/cliente/${idCliente}`);
  }
}
