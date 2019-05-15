import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogLogsComponent } from './dialog-logs.component';

describe('DialogLogsComponent', () => {
  let component: DialogLogsComponent;
  let fixture: ComponentFixture<DialogLogsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogLogsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogLogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
