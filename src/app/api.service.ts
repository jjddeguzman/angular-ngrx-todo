import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { ITodo } from './interface/model';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private todoListUrl = 'api/todos/';
  constructor(private http: HttpClient) {}

  getTodos(): Observable<ITodo[]> {
    return this.http.get<ITodo[]>(this.todoListUrl);
    // return this.http.get<ITodo[]>(this.todoListUrl).pipe(
    //   retry(2),
    //   catchError((error: HttpErrorResponse) => {
    //     console.error(error);
    //     return throwError(error);
    //   })
    // );
  }

  // createProduct(product: IProduct): Observable<IProduct> {
  //   product.id = null;
  //   return this.http.post<IProduct>(this.productsUrl, product).pipe(
  //     catchError((error: HttpErrorResponse) => {
  //       console.error(error);
  //       return throwError(error);
  //     })
  //   );
  // }

  // editProduct(product: IProduct): Observable<any> {
  //   return this.http.put(this.productsUrl + product.id, product);
  // }

  // deleteProduct(id: number): Observable<any> {
  //   return this.http.delete(this.productsUrl + id);
  // }
}
