import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validator, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-addlist',
  templateUrl: './addlist.component.html',
  styleUrls: ['./addlist.component.css']
})
export class AddlistComponent implements OnInit {

  testForm !:FormGroup;
  constructor(
    private formBuilder:FormBuilder, 
    private routers:Router,
    private http:ApiService) { }

  ngOnInit(): void {
    this.testForm= this.formBuilder.group({
      employeeName:["",Validators.required],
      employeeSalary:["",Validators.required],
      employeeAge:["",Validators.required],
      id:["",Validators.required]
    });
  }
   
  addSubmit(){
    console.log(this.testForm.value,'testForm.value');
    if(this.testForm.valid){
      this.http.postRequest('postEmp',this.testForm.value).subscribe((res)=>{
        console.log(res,'resPost');
        this.routers.navigateByUrl("/list")
        alert("Add data successfuly.....");
          this.testForm.reset();
          
      })
    }
  }
}