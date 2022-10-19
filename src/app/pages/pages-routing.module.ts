import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddlistComponent } from './addlist/addlist.component';
import { HomeComponent } from './home/home.component';
import { ListComponent } from './list/list.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'list', component:ListComponent},
  {path:'addlist', component:AddlistComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
