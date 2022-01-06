import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListedGuitarsComponent } from './listed-guitars.component';

describe('ListedGuitarsComponent', () => {
  let component: ListedGuitarsComponent;
  let fixture: ComponentFixture<ListedGuitarsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListedGuitarsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListedGuitarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
