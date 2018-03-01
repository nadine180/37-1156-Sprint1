import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable()
export class MyitemsService {

  constructor(private httpClient: HttpClient) { }

  createProduct(name:string, price:number) {
    return this.httpClient.post(environment.apiUrl + 'Nadine/createProduct', {'name':name, 'price':price});
  }

  getProducts(){
    return this.httpClient.get(environment.apiUrl + 'Nadine/getProducts');
  }

//   updateProduct(name:string, price:number) {
//     return this.httpClient.patch(environment.apiUrl + 'Nadine/updateProduct/:productId', {'name':name,'price':price});
//   }

}
