import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrivatePicturesComponent } from './private-pictures.component';

describe('PrivatePicturesComponent', () => {
  let component: PrivatePicturesComponent;
  let fixture: ComponentFixture<PrivatePicturesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrivatePicturesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrivatePicturesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
