import { Component, OnInit } from '@angular/core';
import { gotoObject } from 'src/app/components/detailed-guitar/detailed-guitar.component';

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

  goTo(goToObject: gotoObject): void{
    this.whatToShow = (goToObject.where) as show;
    if(goToObject.selectedGuitarId){
      this.selectedGuitarId = goToObject.selectedGuitarId;
    }
  }
}
