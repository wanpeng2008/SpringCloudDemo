import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PicDetailRenderComponent } from './pic-detail-render.component';

describe('PicDetailRenderComponent', () => {
  let component: PicDetailRenderComponent;
  let fixture: ComponentFixture<PicDetailRenderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PicDetailRenderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PicDetailRenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
