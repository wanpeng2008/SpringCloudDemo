import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FileNameCellComponent } from './file-name-cell.component';

describe('FileNameCellComponent', () => {
  let component: FileNameCellComponent;
  let fixture: ComponentFixture<FileNameCellComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FileNameCellComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FileNameCellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
