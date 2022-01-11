import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Review {
  star: string,
  body: string,
  name: string
}

export interface Guitar {
  name: string
  description: string,
  longDescription: string,
  image: string,
  price: string,
  specifications: string,
  dateAdded: string,
  category: string,
  soldOut: string,
  reviews: Review[]
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

  getTheData(): Observable<Guitar[]> {
    return this.http.get<Guitar[]>('/assets/data.json')
  }

}
