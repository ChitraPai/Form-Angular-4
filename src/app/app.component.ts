/*
App Component ts
*/
import { Component } from '@angular/core';
import {NgForm} from '@angular/forms';
import { ReactiveFormsModule,
    FormsModule,
    FormGroup,
    FormControl,
    Validators,
    FormBuilder} from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
/*fg: FormGroup;
 constructor(fb: FormBuilder){
this.fg = fb.group({
 'courses' : ['HTML','CSS','JAVA'];
  'userName': ['', [Validators.required, Validators.minLength(2)]],
  'emailId':['', Validators.required],
  
  'mobNo':'',
  city='['', Validators.required]';
  state='['', Validators.required]';

 })
  }*/

  userName='';
  emailId='';
 /* courses = ['HTML','JAVA'];*/
  mobNo='';
  state='';
  city='';
  

 
    

/*onSubmit() {
  if (this.myform.valid) {
    console.log("Form Submitted!");
    this.myform.reset();
  }
} */
  addList(form: NgForm){
var example=[];
example.push({'userName':form.value.userName, 'emailId':form.value.emailId, 
  'courses':form.value.courses, 'mobNo':form.value.mobNo, 'city':form.value.city,
'state':form.value.state})
    console.log(example);
/*for (let list of example) {
  console.log("going");

 example[list]=form.value;
  
   console.log(example[list]); // "4", "5", "6"
}*/

  }

   editList(form: NgForm){
var example=[];
example.push({'userName':form.value.userName, 'emailId':form.value.emailId, 
  'courses':form.value.courses, 'mobNo':form.value.mobNo, 'city':form.value.city,
'state':form.value.state})
    console.log(example);
/*for (let list of example) {
  console.log("going");

 example[list]=form.value;
  
   console.log(example[list]); // "4", "5", "6"
}*/

  }



}
