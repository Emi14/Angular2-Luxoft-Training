import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

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
import {RouterModule} from "@angular/router";
import {FormValdiationComponent} from './form-valdiation/form-valdiation.component';

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
    CountdownParentViewChildComponent,
    FormValdiationComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule.forRoot(),
    RouterModule.forRoot([
      {path: 'store/:id', component: StoreComponent},
      {path: 'parent-receiver', component: ParentEventReceiverComponent,
        children:[
          {path: '', redirectTo: 'overview', pathMatch: 'full'},
          {path: 'overview', component: ParentEventReceiverComponent},
          {path: 'specs', component: ChildDataBindComponent}
        ]},
      {path: '', component: ChildDataBindComponent},
      {path: '**', component: CountdownTimerComponent, data: {title: 'Page not found'}}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
