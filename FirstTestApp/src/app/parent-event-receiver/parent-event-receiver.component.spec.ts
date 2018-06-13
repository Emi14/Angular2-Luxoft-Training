import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ParentEventReceiverComponent} from './parent-event-receiver.component';

describe('ParentEventReceiverComponent', () => {
  let component: ParentEventReceiverComponent;
  let fixture: ComponentFixture<ParentEventReceiverComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParentEventReceiverComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParentEventReceiverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
