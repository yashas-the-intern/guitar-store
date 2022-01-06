import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailedGuitarComponent } from './detailed-guitar.component';

describe('DetailedGuitarComponent', () => {
  let component: DetailedGuitarComponent;
  let fixture: ComponentFixture<DetailedGuitarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailedGuitarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailedGuitarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
