import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PicDetailComponent } from './pic-detail.component';

describe('PicDetailComponent', () => {
  let component: PicDetailComponent;
  let fixture: ComponentFixture<PicDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PicDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PicDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
