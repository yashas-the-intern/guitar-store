import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, retry } from 'rxjs';

export interface Review {
  star: string,
  body: string,
  name: string
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
  // reviews: Review[]
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

}
