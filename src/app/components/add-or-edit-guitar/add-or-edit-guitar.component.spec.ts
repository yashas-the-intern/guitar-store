import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddOrEditGuitarComponent } from './add-or-edit-guitar.component';

describe('AddOrEditGuitarComponent', () => {
  let component: AddOrEditGuitarComponent;
  let fixture: ComponentFixture<AddOrEditGuitarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddOrEditGuitarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddOrEditGuitarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
