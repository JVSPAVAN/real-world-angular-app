import { Component, OnInit } from '@angular/core';
import { Service } from '../service.service';
import {faculty} from '../Faculty/faculty';

@Component({
  selector: 'app-facultybystream',
  templateUrl: './facultybystream.component.html',
  styleUrls: ['./facultybystream.component.css']
})
export class FacultybystreamComponent implements OnInit {

    faculty:faculty[];    

selectedvalue:string;
streams:string[];

faculty1:faculty[];
 
constructor(private service:Service) { }

ngOnInit() {
   
   this.faculty = this.service.getAllFaculties();
   console.log( "faculty"+this.faculty );
   this.streams=["Java",".Net","CM"];

}


getSelectedFacultybyStream(){
   
   console.log(this.selectedvalue);
   
    this.faculty1 = this.service.getFacultybyStream(this.selectedvalue);
    console.log("faculty1"+ this.faculty1 );
}

}