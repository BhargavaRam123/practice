import { Routes } from '@angular/router';
import { SignaldemonstrationComponent } from './signaldemonstration/signaldemonstration.component';
import { PipesdemonstrationComponent } from './pipesdemonstration/pipesdemonstration.component';
export const routes: Routes = [
  {
    path: 'signal',
    component: SignaldemonstrationComponent,
  },
  {
    path: 'pipe',
    component: PipesdemonstrationComponent,
  },
];
