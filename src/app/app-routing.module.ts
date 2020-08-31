import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddUserdetailComponent } from './add-userdetail/add-userdetail.component';
import { EditUserdetailComponent } from './edit-userdetail/edit-userdetail.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserdetailComponent } from './userdetail/userdetail.component';

const routes: Routes = [
  { path: 'edit', component: EditUserdetailComponent },
  { path: 'add', component: AddUserdetailComponent },
  {
    path:'list',component:UserdetailComponent
  },
  { path: '', component: DashboardComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
