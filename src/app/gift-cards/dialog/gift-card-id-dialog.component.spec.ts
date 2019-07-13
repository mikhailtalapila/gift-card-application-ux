import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GiftCardIdDialogComponent } from './gift-card-id-dialog.component';

describe('GiftCardIdDialogComponent', () => {
  let component: GiftCardIdDialogComponent;
  let fixture: ComponentFixture<GiftCardIdDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GiftCardIdDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GiftCardIdDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
