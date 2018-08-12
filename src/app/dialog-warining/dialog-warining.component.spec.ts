import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogWariningComponent } from './dialog-warining.component';

describe('DialogWariningComponent', () => {
  let component: DialogWariningComponent;
  let fixture: ComponentFixture<DialogWariningComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogWariningComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogWariningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
