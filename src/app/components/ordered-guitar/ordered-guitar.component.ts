import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Guitar, GuitarsService, gotoObject } from 'src/app/services/guitars.service';

@Component({
  selector: 'app-ordered-guitar',
  templateUrl: './ordered-guitar.component.html',
  styleUrls: ['./ordered-guitar.component.css']
})
export class OrderedGuitarComponent implements OnInit {

  selectedGuitar: Guitar;
  @Input() guitarId: string;
  @Output() goToEvent: EventEmitter<gotoObject> = new EventEmitter();

  constructor(private gs: GuitarsService) { }

  ngOnInit(): void {
    this.gs.getTheData()
      .subscribe((guitars: Guitar[]) => {
        this.selectedGuitar = (guitars.find((guitar) => guitar.dateAdded === this.guitarId)) as Guitar;
      });
  }

  goTo(goToObject: gotoObject): void {
    this.goToEvent.emit(goToObject);
  }

}

