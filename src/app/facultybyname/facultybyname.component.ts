import { Component, OnInit } from '@angular/core';
import { Service } from '../service.service';
import {faculty} from '../Faculty/faculty';

@Component({
  selector: 'app-facultybyname',
  templateUrl: './facultybyname.component.html',
  styleUrls: ['./facultybyname.component.css']
})
export class FacultybynameComponent implements OnInit {

faculty:faculty[];    

selectedvalue:string;


faculty1:faculty;
 
constructor(private service:Service) { }

ngOnInit() {
   
   this.faculty = this.service.getAllFaculties();
   console.log( "faculty"+this.faculty );

}


getSelectedFaculty(){
   
   console.log(this.selectedvalue);
   
    this.faculty1 = this.service.getFacultybyName(this.selectedvalue);
    console.log("faculty1"+ this.faculty1.facName );
}

}



    
  
