import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewGiftCardComponent } from './new-gift-card.component';

describe('NewGiftCardComponent', () => {
  let component: NewGiftCardComponent;
  let fixture: ComponentFixture<NewGiftCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewGiftCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewGiftCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
