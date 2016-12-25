import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { GraphComponent }   from '../graph/graph.component';
import { DeviceStatusComponent }   from '../device-status/device-status.component';

const routes: Routes = [
  { path: '', redirectTo: '/graph', pathMatch: 'full' },
  { path: 'graph',  component: GraphComponent },
  { path: 'devices',  component: DeviceStatusComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class RoutesModule { }
