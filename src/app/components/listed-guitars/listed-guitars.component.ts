import { Component, OnInit, Type } from '@angular/core';

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

  constructor() { }

  ngOnInit(): void {
  }

  search(): void {
    console.log(this.searchedValue);
  }

  sort(): void {
    console.log(this.selectedValue);
    console.log(this.sortDirection);
  }

}
