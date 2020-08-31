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

  constructor(private snackBar: MatSnackBar, private http: HttpClient ) { }

  showMessage(msg: string): void {
    this.snackBar.open(msg, 'Fechar', {
      duration: 3000,
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
}

// export function ConvertToNumber() {
//   return (target: any, key: string) => {
//     let val = target[key]

//     const getter = () => val

//     const setter = (value: string) => {
//       val = Number(value)
//     }
//     Object.defineProperty(target, key, {
//       get: getter,
//       set: setter
//     })
//   }
// }
