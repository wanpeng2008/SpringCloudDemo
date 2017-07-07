import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatetimeRenderComponent } from './datetime-render.component';

describe('DatetimeRenderComponent', () => {
  let component: DatetimeRenderComponent;
  let fixture: ComponentFixture<DatetimeRenderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatetimeRenderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatetimeRenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
