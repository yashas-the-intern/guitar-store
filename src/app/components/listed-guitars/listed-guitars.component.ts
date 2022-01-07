import { Component, OnInit } from '@angular/core';
import { Guitar,GuitarsService } from 'src/app/services/guitars.service'

type PriceOrName = 'price' | 'name';
type AscOrDec = 'ascending' | 'descending';

@Component({
  selector: 'app-listed-guitars',
  templateUrl: './listed-guitars.component.html',
  styleUrls: ['./listed-guitars.component.css']
})
export class ListedGuitarsComponent implements OnInit {

  searchedValue: string = '';
  selectedValue: PriceOrName = 'price';
  sortDirection: AscOrDec = 'ascending';
  guitars: Guitar[] = []

  constructor(private gs:GuitarsService) { }

  ngOnInit(): void {
    this.gs.getTheData().subscribe((data: Guitar[])=> this.guitars = data);
  }

  search(): void {
    console.log(this.searchedValue);
  }

  sort(): void {
    console.log(this.selectedValue);
    console.log(this.sortDirection);
  }

}
