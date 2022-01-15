import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Guitar, GuitarsService, gotoObject } from 'src/app/services/guitars.service';

type show = 'description' | 'specification' | 'review';

@Component({
  selector: 'app-detailed-guitar',
  templateUrl: './detailed-guitar.component.html',
  styleUrls: ['./detailed-guitar.component.css']
})
export class DetailedGuitarComponent implements OnInit {

  guitarsLength: number;
  selectedGuitar: Guitar;
  showing: show = 'description';
  reviewPoint: number;
  reviewer: string;
  review: string;
  @Input() guitarId: string = '';
  @Output() goToEvent: EventEmitter<gotoObject> = new EventEmitter();

  constructor(private gs: GuitarsService) { }

  ngOnInit(): void {
    this.gs.getAGuitar(this.guitarId)
      .subscribe((guitar: Guitar) => {
        this.selectedGuitar = guitar;
      });
    this.gs.getTheGuitars()
      .subscribe((guitars: Guitar[]) => {
        this.guitarsLength = guitars.length;
      })
  }

  goTo(goToObject: gotoObject): void {
    this.goToEvent.emit(goToObject);
  }

  onSubmit(): void {
    if (this.review && this.reviewer) {
      // this.selectedGuitar.reviews.push({
      //   star: String(this.reviewPoint),
      //   name: this.reviewer,
      //   body: this.review
      // })
      this.reviewPoint = 1;
      this.review = '';
      this.reviewer = '';
    }
    else {
      alert('Please input the details');
    }
  }

  moveBack(): void {
    const sgi = this.selectedGuitar.guitar_id;
    const previousGuitarId = (sgi === 1) ? this.guitarsLength : sgi - 1;
    
    this.guitarId = previousGuitarId.toString();
    this.ngOnInit();
  }

  moveForward(): void {
    const sgi = this.selectedGuitar.guitar_id;
    const nextGuitarId = (sgi === this.guitarsLength) ? 1 : sgi + 1;
    
    this.guitarId = nextGuitarId.toString();
    this.ngOnInit();
  }

}
