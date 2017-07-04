import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpiredPicturesComponent } from './expired-pictures.component';

describe('ExpiredPicturesComponent', () => {
  let component: ExpiredPicturesComponent;
  let fixture: ComponentFixture<ExpiredPicturesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpiredPicturesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpiredPicturesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
