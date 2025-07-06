import { Routes } from '@angular/router';
import { SignaldemonstrationComponent } from './signaldemonstration/signaldemonstration.component';
import { PipesdemonstrationComponent } from './pipesdemonstration/pipesdemonstration.component';
import { ObservablesComponent } from './observables/observables.component';
import { parentComponent } from './lifecyclehooks/lifecyclehooks.component';
import { ParentComponentngoninit } from './ngoninit/ngoninit.component';
import { ExampleComponent } from './ngdocheck/ngdocheck.component';
export const routes: Routes = [
  {
    path: 'signal',
    component: SignaldemonstrationComponent,
  },
  {
    path: 'pipe',
    component: PipesdemonstrationComponent,
  },
  {
    path: 'observables',
    component: ObservablesComponent,
  },
  {
    path: 'hooks',
    component: parentComponent,
  },
  {
    path: 'ngoninit',
    component: ParentComponentngoninit,
  },
  {
    path: 'ngdocheck',
    component: ExampleComponent,
  },
];
