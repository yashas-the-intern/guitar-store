import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Guitar, GuitarsService } from 'src/app/services/guitars.service';

type show = 'description' | 'specification' | 'review';
export interface gotoObject {
  where: string,
  selectedGuitarId?: string
}

@Component({
  selector: 'app-detailed-guitar',
  templateUrl: './detailed-guitar.component.html',
  styleUrls: ['./detailed-guitar.component.css']
})
export class DetailedGuitarComponent implements OnInit {

  guitars: Guitar[];
  selectedGuitar: Guitar;
  guitarIndex: number;
  showing: show = 'description';
  reviewPoint: number;
  reviewer: string;
  review: string;
  @Input() guitarId: string = '';
  @Output() goToEvent: EventEmitter<gotoObject> = new EventEmitter();

  constructor(private gs: GuitarsService) { }

  ngOnInit(): void {
    this.gs.getTheData()
      .subscribe((guitars: Guitar[]) => {
        this.guitars = guitars;
        this.guitarIndex = (this.guitars.findIndex((guitar) => guitar.dateAdded === this.guitarId)) as number;
        this.selectedGuitar = this.guitars[this.guitarIndex];
        // console.log(this.guitarId, this.selectedGuitar)
      });
  }

  goTo(goToObject: gotoObject): void {
    this.goToEvent.emit(goToObject);
  }

  onSubmit(): void {
    if (this.review && this.reviewer) {
      this.selectedGuitar.reviews.push({
        star: String(this.reviewPoint),
        name: this.reviewer,
        body: this.review
      })
    }
    else {
      alert('Please input the details');
    }
  }

  moveBack(): void {
    this.guitarIndex === 0 ? (this.guitarIndex = this.guitars.length - 1) : this.guitarIndex -= 1;
    this.selectedGuitar = this.guitars[this.guitarIndex];
  }

  moveForward(): void {
    this.guitarIndex === (this.guitars.length - 1) ? this.guitarIndex = 0 : this.guitarIndex += 1;
    this.selectedGuitar = this.guitars[this.guitarIndex];
  }

}
