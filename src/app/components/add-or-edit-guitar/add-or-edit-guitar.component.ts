import { Component, OnInit, Input, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { gotoObject, Guitar, GuitarsService } from 'src/app/services/guitars.service';

type stateType = 'add' | 'edit';

@Component({
  selector: 'app-add-or-edit-guitar',
  templateUrl: './add-or-edit-guitar.component.html',
  styleUrls: ['./add-or-edit-guitar.component.css']
})
export class AddOrEditGuitarComponent implements OnInit {

  state: stateType;
  formObject: Guitar;
  @Input() guitarId?: string;
  @Output() goToEvent: EventEmitter<gotoObject> = new EventEmitter();

  constructor(private gs: GuitarsService) { }

  ngOnInit(): void {
    if (this.guitarId) {
      this.state = 'edit';

      this.gs.getAGuitar(this.guitarId).subscribe((guitar: Guitar) => {
        this.formObject = guitar;
      });
    }
    else {
      this.state = 'add';
      this.formObject = {
        guitar_id: 0,
        name: '', description: '', longDescription: '', image: '',
        price: '', specifications: '', dateAdded: '', category: '',
        soldOut: ''
      };

    }
  }

  public onSubmit(): void {

    if (!this.formObject.name || !this.formObject.price || !this.formObject.description) {
      alert('Enter the details correctly');
      return;
    }

    if (this.state === 'add') {
      this.gs.postGuitar(this.formObject).subscribe((guitar: Guitar) => {
        this.goToEvent.emit({ where: 'listedComponent' });
      })
    }
    else {
      this.gs.putGuitar(this.formObject).subscribe((guitar: Guitar) => {
        this.goToEvent.emit({ where: 'detailedComponent', selectedGuitarId: this.guitarId });
      })
    }
  }

  public checkBoxChanged(): void {
    this.formObject.soldOut = this.formObject.soldOut == 'false' ? 'true' : 'false';
  }

  public selectFile(event: Event): void {

    const files = event.target as HTMLInputElement;

    if (!files.files?.length) {
      return;
    }

    const image = files.files[0];
    const _this = this;
    let reader = new FileReader();
    reader.onloadend = function () {
      _this.formObject.image = reader.result as string;
    }
    reader.readAsDataURL(image);

  }

}
