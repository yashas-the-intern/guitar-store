import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Guitar, GuitarsService } from 'src/app/services/guitars.service';

type show = 'description' | 'specification' | 'review';

@Component({
  selector: 'app-detailed-guitar',
  templateUrl: './detailed-guitar.component.html',
  styleUrls: ['./detailed-guitar.component.css']
})
export class DetailedGuitarComponent implements OnInit {

  selectedGuitar: Guitar;
  showing: show = 'description';
  @Input() guitarId: string = '';
  @Output() goToEvent: EventEmitter<string> = new EventEmitter();

  constructor(private gs:GuitarsService) { }

  ngOnInit(): void {
    this.gs.getTheData()
    .subscribe((guitars: Guitar[]) => { 
      this.selectedGuitar = (guitars.find((guitar)=> guitar.dateAdded === this.guitarId)) as Guitar;
      console.log(this.guitarId, this.selectedGuitar)
    });
  }

  goTo(where: string): void{
    this.goToEvent.emit(where);
  }

}
