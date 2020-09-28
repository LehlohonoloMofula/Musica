import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from './product';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
    private productUrl: 'api/products/products.json';

  constructor(private http: HttpClient) { }

//   get(): Observable Product[]{
//     return this.http.get<Product[]>(this.productUrl)
//   }

    get(): Product[]{
        return[
        {
        'productId': 2,
        'Name':'',
        'Description' : '',
        'Artist':'Amy Winehouse',
        'price': 90.00,
        'thumbnailUrl':'',
        'imageUrl': '',
        // 'releaseDate': ,
        'rating': 4.2 
        },
        {
          'productId': 1,
          'Name':'',
          'Description' : '',
          'Artist':'Ariana Grande',
          'price': 129.00,
          'thumbnailUrl':'',
          'imageUrl': '',
          // 'releaseDate': ,
          'rating': 4.2 
        },

   ]}
}