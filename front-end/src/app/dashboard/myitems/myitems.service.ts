import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable()
export class MyitemsService {

  constructor(private httpClient: HttpClient) { }

  createProduct(name:string, price:number) {
    return this.httpClient.post(environment.apiUrl + 'perihan/createProduct', {'name':name, 'price':price});
  }

  getProducts(){
    return this.httpClient.get(environment.apiUrl + 'perihan/getProducts');
  }

//   updateProduct(name:string, price:number) {
//     return this.httpClient.patch(environment.apiUrl + 'perihan/updateProduct/:productId', {'name':name,'price':price});
//   }

}