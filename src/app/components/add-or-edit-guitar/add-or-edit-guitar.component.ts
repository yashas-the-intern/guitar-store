import { Component, OnInit, Input, Output } from '@angular/core';

type stateType = 'add' | 'edit';

@Component({
  selector: 'app-add-or-edit-guitar',
  templateUrl: './add-or-edit-guitar.component.html',
  styleUrls: ['./add-or-edit-guitar.component.css']
})
export class AddOrEditGuitarComponent implements OnInit {

  state: stateType;
  @Input() guitarId? : string; 

  constructor() { }

  ngOnInit(): void {
    this.state = this.guitarId ? 'edit' : 'add';
    
  }

}
