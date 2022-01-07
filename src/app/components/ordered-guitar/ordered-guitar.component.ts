import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-ordered-guitar',
  templateUrl: './ordered-guitar.component.html',
  styleUrls: ['./ordered-guitar.component.css']
})
export class OrderedGuitarComponent implements OnInit {

  @Input() guitarId: string = '';

  constructor() { }

  ngOnInit(): void {
    console.log(this.guitarId)
  }

}
