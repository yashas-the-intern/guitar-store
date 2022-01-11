import { Component, OnInit } from '@angular/core';
import { gotoObject } from 'src/app/services/guitars.service';

type show = 'listedComponent' | 'detailedComponent' | 'orderedComponent' | 'addOrEditComponent';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Yashas\' Guitar Store';
  whatToShow: show = 'listedComponent';
  // whatToShow: show = 'addOrEditComponent';

  selectedGuitarId: string = '';

  constructor() { }

  ngOnInit() { }

  goTo(goToObject: gotoObject): void {
    this.whatToShow = (goToObject.where) as show;
    if (goToObject.selectedGuitarId) {
      this.selectedGuitarId = goToObject.selectedGuitarId;
    }
  }
}
