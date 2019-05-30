import { Component, OnInit } from '@angular/core';
import {Form,FormBuilder,FormGroup, Validators} from '@angular/forms';
import {Service} from '../service.service';

import {trainer} from '../Faculty/trainer';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
    trainer1:trainer;
message:string;
formgroup:FormGroup;
constructor(private fb : FormBuilder,private service :Service) {
    
    this.createform();
}

createform(){
    this.formgroup=this.fb.group({
        Trainer_Id:['',Validators.required],
        Trainer_Name: ['',Validators.required] ,
        Trainer_Experience:['',Validators.required] ,
        Stream:['',Validators.required] ,
        contact_number:['',Validators.required] ,
        Address:['',Validators.required] ,
        c:''
    });
}
  ngOnInit() {
  }
  
  
 submit(){
      
      console.log(this.formgroup.value);
      this.trainer1=this.formgroup.value;
      this.service.registertrainer(this.trainer1).subscribe((data) => {
          this.message="Trainer is Registered Successfully "});
      
      this.formgroup.reset({
          Trainer_Id:'',
          Trainer_Name:'',
          Trainer_Experience:'',
          Stream:'',
          contact_number:'' ,
          Address:'',
          c:''
      });
  }

}


