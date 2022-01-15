import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, retry } from 'rxjs';

export interface Review {
  star: string,
  body: string,
  name: string,
  guitar_id: number
}

export interface Guitar {
  guitar_id: number;
  name: string
  description: string,
  longDescription: string,
  image: string,
  price: string,
  specifications: string,
  dateAdded: string,
  category: string,
  soldOut: string,
}

export interface gotoObject {
  where: string,
  selectedGuitarId?: string
}

@Injectable({
  providedIn: 'root'
})
export class GuitarsService {

  constructor(private http: HttpClient) { }

  getTheGuitars(): Observable<Guitar[]> {
    return this.http.get<Guitar[]>('http://localhost:3000/guitars/');
  }

  getAGuitar(id: string): Observable<Guitar> {
    return this.http.get<Guitar>(`http://localhost:3000/guitars/${id}`);
  }

  getReviews(guitarId: string): Observable<Review[]> {
    return this.http.get<Review[]>(`http://localhost:3000/reviews-of-guitar/${guitarId}`);
  }

  postReview(reviewObject: Review): Observable<Review> {
    return this.http.post<Review>('http://localhost:3000/reviews/',
      {
        star: reviewObject.star,
        name: reviewObject.name,
        body: reviewObject.body,
        guitarId: reviewObject.guitar_id
      });
  }

  postGuitar(formObject: Guitar): Observable<Guitar> {
    return this.http.post<Guitar>('http://localhost:3000/guitars/',
    {
        name: formObject.name,
        description: formObject.description,
        longDescription: formObject.longDescription,
        image: formObject.image,
        price: formObject.price,
        specifications: formObject.specifications,
        category: formObject.category,
        soldOut: formObject.soldOut
    })
  }

}
