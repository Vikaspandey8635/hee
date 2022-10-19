import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddlistComponent } from './addlist/addlist.component';
import { EditlistComponent } from './editlist/editlist.component';
import { HomeComponent } from './home/home.component';
import { ListComponent } from './list/list.component';
import { ViewlistComponent } from './viewlist/viewlist.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'list', component:ListComponent},
  {path:'addlist', component:AddlistComponent},
  {path:'editlist', component:EditlistComponent},
  {path:'editlist/:id', component:EditlistComponent},
  {path:'view', component:ViewlistComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
