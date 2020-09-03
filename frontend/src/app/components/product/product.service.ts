import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar'
import { HttpClient } from '@angular/common/http';
import { IProduct } from './product.model'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  baseUrl = "http://localhost:3001/products"

  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }

  showMessage(msg: string): void {
    this.snackBar.open(msg, 'Fechar', {
      duration: 1500,
      horizontalPosition: 'right',
      verticalPosition: 'top'
    })
  }

  create(product: IProduct): Observable<IProduct> {
    return this.http.post<IProduct>(this.baseUrl, product)
  }

  read(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>(this.baseUrl)
  }

  readById(id: string): Observable<IProduct> {
    const url = `${this.baseUrl}/${id}`
    return this.http.get<IProduct>(url)
  }

  update(product: IProduct): Observable<IProduct> {
    const url = `${this.baseUrl}/${product.id}`
    return this.http.put<IProduct>(url, product)
  }

  delete(id: string): Observable<IProduct> {
    const url = `${this.baseUrl}/${id}`
    return this.http.delete<IProduct>(url)
  }
}