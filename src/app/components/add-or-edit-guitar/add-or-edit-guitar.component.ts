import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { Guitar, GuitarsService } from 'src/app/services/guitars.service';

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
  @ViewChild('imgOutput') imgOutput: ElementRef;

  constructor(private gs: GuitarsService) { }

  ngOnInit(): void {
    if (this.guitarId) {
      this.state = 'edit';
      this.gs.getTheGuitars().subscribe((guitars: Guitar[]) => {
        this.formObject = (guitars.find((guitar) => guitar.dateAdded === this.guitarId)) as Guitar;
        const imagelink = `/assets/img/${this.formObject.image}.jpg`;
        this.imgOutput.nativeElement.src = imagelink;
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
    console.log(this.formObject);
  }

  public checkBoxChanged(): void {
    this.formObject.soldOut = this.formObject.soldOut == 'false' ? 'true' : 'false';
  }

  public selectFile(event: any): void {
    const imagelink = window.URL.createObjectURL(event.target.files[0])
    this.imgOutput.nativeElement.src = imagelink;
  }

}
