import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { OutletContext } from '@angular/router';
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
  manipulatedGuitars: Guitar[] = []; 
  @Output() goToDetailsEvent: EventEmitter<string> = new EventEmitter();

  constructor(private gs:GuitarsService) { }

  ngOnInit(): void {
    this.gs.getTheData()
    .subscribe((data: Guitar[])=> {
      this.guitars = data;
      this.manipulatedGuitars = this.guitars.slice();
    });
  }

  search(): void {
    this.manipulatedGuitars = this.guitars.filter((guitar) => {
      return ( guitar.name.toLowerCase().includes(this.searchedValue.toLowerCase()) ||
               guitar.description.toLowerCase().includes(this.searchedValue.toLowerCase()) )       
    });
  }

  sort(): void {

    const data = this.guitars.slice();

    this.manipulatedGuitars = data.sort((a, b) => {
      const isAsc = this.sortDirection === 'ascending';
      switch (this.selectedValue) {
        case 'name':
          return compare(a.name, b.name, isAsc);
        case 'price':
          return compare(Number(a.price),Number(b.price), isAsc);
        default:
          return 0;
      }
    });
  }

  goToDetails(dateAdded: string): void {
    this.goToDetailsEvent.emit(dateAdded);
  }


}

const compare = (a: number | string, b: number | string, isAsc: boolean) => {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}