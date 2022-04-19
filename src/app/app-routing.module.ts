import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeadOfficeComponent } from './head-office/head-office.component';
import { AuditControlComponent } from './audit-control/audit-control.component';
import { SmetaComponent } from './smeta/smeta.component';
import { WrapComponent } from './wrap/wrap.component';
import { AboutComponent } from './MyComponent/about/about.component';
import { TodosComponent } from './MyComponent/todos/todos.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./head-office/head-office.module').then(mod=>mod.HeadOfficeModule),
    component:HeadOfficeComponent
  },
  {
    path: 'audit-control',
    component:AuditControlComponent
  },
  {
    path: 'smeta',
    component:SmetaComponent
  },
  {
    path: 'wrap',
    component:WrapComponent
  }
  // {
  //   path: '',
  //   component:TodosComponent
  // },
  // {
  //   path: 'about',
  //   component:AboutComponent
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes , {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
