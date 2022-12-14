import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-editlist',
  templateUrl: './editlist.component.html',
  styleUrls: ['./editlist.component.css']
})
export class EditlistComponent implements OnInit {

  editForm !: FormGroup;
  constructor(
    private router:ActivatedRoute, 
    private formBuilder: FormBuilder,
    private http:ApiService,
    private route:Router
  ) { 
    this.editForm= this.formBuilder.group({
      employeeName: new FormControl('',[Validators.required]),
      employeeSalary: new FormControl('',[Validators.required]),
      employeeAge: new FormControl('',[Validators.required]),
    })
  }

  ngOnInit(): void {
    console.warn(this.router.snapshot.params['id'])
    this.http.getRequestWithID('getById', this.router.snapshot.params['id']).subscribe((result:any)=>{
      console.warn("data",result);
     this.editForm.patchValue(result.data);
    });
  }

  updateSubmit(){
    if(this.editForm.valid){
      console.log("edit",this.editForm.value);
      this.http.putRequestWithID('putById',this.router.snapshot.params['id'],this.editForm.value).subscribe((res:any)=>{
        this.editForm.value;
        console.warn(res);
        this.route.navigateByUrl("list")
      })
    }
  }

}
