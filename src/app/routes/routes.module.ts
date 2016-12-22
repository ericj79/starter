import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { GraphComponent }   from '../graph/graph.component';

const routes: Routes = [
  { path: '', redirectTo: '/graph', pathMatch: 'full' },
  { path: 'graph',  component: GraphComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class RoutesModule { }
