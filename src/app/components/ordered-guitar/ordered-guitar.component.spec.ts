import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderedGuitarComponent } from './ordered-guitar.component';

describe('OrderedGuitarComponent', () => {
  let component: OrderedGuitarComponent;
  let fixture: ComponentFixture<OrderedGuitarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderedGuitarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderedGuitarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
