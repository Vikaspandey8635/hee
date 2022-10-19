import {AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { Route, Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  displayedColumns: string[] = ['id','employee_name', 'employee_salary', 'employee_age', 'action'];
  dataSource !: MatTableDataSource<any>
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private http:ApiService,private route:Router) { }

  ngOnInit(): void {
    this.getAllData();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  getAllData(){
    this.http.getRequest('getEmp').subscribe((res:any)=>{
      console.log(res,'getEmp')
      this.dataSource = new MatTableDataSource(res.allEmployees);
      this.dataSource.paginator= this.paginator
      this.dataSource.sort= this.sort
    })
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  back(){
    this.route.navigate(["/"])
  }

  view(){
    this.route.navigate(["view"])
  }

  delete(data:any){
    console.log(data, "dataaaa");
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result:any) => {
      if (result.value) {
        this.http
          .deleteRequestWithID('deleteById', data)
          .subscribe((response: any) => {
            console.log(response.allEmployees,'deleteresponse');    
            this.getAllData();
          });
      }
    });
  }

}
