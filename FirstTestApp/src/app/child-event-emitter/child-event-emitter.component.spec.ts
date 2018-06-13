import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ChildEventEmitterComponent} from './child-event-emitter.component';

describe('ChildEventEmitterComponent', () => {
  let component: ChildEventEmitterComponent;
  let fixture: ComponentFixture<ChildEventEmitterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChildEventEmitterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildEventEmitterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
