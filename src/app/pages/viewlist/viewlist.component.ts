import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';


@Component({
  selector: 'app-viewlist',
  templateUrl: './viewlist.component.html',
  styleUrls: ['./viewlist.component.css']
})
export class ViewlistComponent implements OnInit {

  editForm !: FormGroup;
  constructor(
    private router:ActivatedRoute, 
    private formBuilder: FormBuilder,
    private http:ApiService,
    private route:Router,

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

  closed(){
    this.route.navigateByUrl("list")
  }

  
}
