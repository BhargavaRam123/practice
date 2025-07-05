import { Routes } from '@angular/router';
import { SignaldemonstrationComponent } from './signaldemonstration/signaldemonstration.component';
import { PipesdemonstrationComponent } from './pipesdemonstration/pipesdemonstration.component';
import { ObservablesComponent } from './observables/observables.component';
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
];
