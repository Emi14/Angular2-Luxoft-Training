import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {FormValdiationComponent} from './form-valdiation.component';

describe('FormValdiationComponent', () => {
  let component: FormValdiationComponent;
  let fixture: ComponentFixture<FormValdiationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormValdiationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormValdiationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
