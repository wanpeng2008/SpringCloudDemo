import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicPicturesComponent } from './public-pictures.component';

describe('PublicPicturesComponent', () => {
  let component: PublicPicturesComponent;
  let fixture: ComponentFixture<PublicPicturesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PublicPicturesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PublicPicturesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
