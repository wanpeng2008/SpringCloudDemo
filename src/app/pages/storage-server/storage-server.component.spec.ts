import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StorageServerComponent } from './storage-server.component';

describe('StorageServerComponent', () => {
  let component: StorageServerComponent;
  let fixture: ComponentFixture<StorageServerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StorageServerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StorageServerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
