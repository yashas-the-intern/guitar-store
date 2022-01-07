import { Component, OnInit } from '@angular/core';

type show = 'listedComponent' | 'detailedComponent' | 'orderedComponent';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'OffshoreGuitarStore';
  whatToShow: show = 'listedComponent';
  selectedGuitarId: string = ''

  constructor(){}

  ngOnInit(){}

  goToDetails(dateAdded:string): void {
    this.selectedGuitarId = dateAdded;
    this.whatToShow = 'detailedComponent';
  }

  goTo(where: string): void{
    this.whatToShow = (where) as show;
  }
}
