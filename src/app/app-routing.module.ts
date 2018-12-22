import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserlistComponent } from './pages/userlist/userlist.component';
import { ResourcelistComponent } from './pages/resourcelist/resourcelist.component';

const routes: Routes = [
  {
    path: '', // default path
    component: UserlistComponent
  },
  {
    path: 'resources',
    component: ResourcelistComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
