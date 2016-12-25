import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { RoutesModule } from './routes/routes.module';

import { AppComponent } from './app.component';
import { GraphComponent } from './graph/graph.component';
import { DeviceStatusComponent } from './device-status/device-status.component';

@NgModule({
  declarations: [
    AppComponent,
    GraphComponent,
    DeviceStatusComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RoutesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
