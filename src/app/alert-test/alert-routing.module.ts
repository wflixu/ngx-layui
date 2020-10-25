import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AlertBaseComponent } from './alert-base.component';

const routes: Routes = [
  {
    path: '',
    component: AlertBaseComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AlertRoutingModule {}
