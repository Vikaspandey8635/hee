import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { HomeComponent } from './home/home.component';
import {MatCardModule} from '@angular/material/card';
import {MatBadgeModule} from '@angular/material/badge';
import {MatButtonModule} from '@angular/material/button';
import { ListComponent } from './list/list.component';
import { AddlistComponent } from './addlist/addlist.component';
import {MatTableModule} from '@angular/material/table';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatPaginatorModule } from '@angular/material/paginator';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditlistComponent } from './editlist/editlist.component';
import { ViewlistComponent } from './viewlist/viewlist.component';



@NgModule({
  declarations: [
    HomeComponent,
    ListComponent,
    AddlistComponent,
    EditlistComponent,
    ViewlistComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    MatCardModule,
    MatBadgeModule,
    MatButtonModule,
    MatTableModule,
    MatFormFieldModule,
    MatPaginatorModule,
    MatInputModule,
    MatIconModule,
    ReactiveFormsModule,
    FormsModule,

    
  ]
})
export class PagesModule { }
