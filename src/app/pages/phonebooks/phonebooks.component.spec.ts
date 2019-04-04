import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhonebooksComponent } from './phonebooks.component';

describe('PhonebooksComponent', () => {
  let component: PhonebooksComponent;
  let fixture: ComponentFixture<PhonebooksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhonebooksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhonebooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
