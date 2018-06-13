import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from "@angular/forms";

import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';
import {ContentComponent} from "./content/content.component";
import {StoreComponent} from './store/store.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {ProductViewComponent} from './product-view/product-view.component';
import {ParentEventReceiverComponent} from './parent-event-receiver/parent-event-receiver.component';
import {ChildEventEmitterComponent} from './child-event-emitter/child-event-emitter.component';
import {ChildDataBindComponent} from './child-data-bind/child-data-bind.component';
import {CountdownTimerComponent} from './countdown-timer/countdown-timer.component';
import {CountdownParentComponent} from './countdown-parent/countdown-parent.component';
import {CountdownParentViewChildComponent} from './countdown-parent-view-child/countdown-parent-view-child.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContentComponent,
    StoreComponent,
    ProductViewComponent,
    ParentEventReceiverComponent,
    ChildEventEmitterComponent,
    ChildDataBindComponent,
    CountdownTimerComponent,
    CountdownParentComponent,
    CountdownParentViewChildComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
