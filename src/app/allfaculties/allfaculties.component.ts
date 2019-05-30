import { Component, OnInit } from '@angular/core';
import { Service } from '../service.service';
import {faculty} from '../Faculty/faculty';

@Component({
  selector: 'app-allfaculties',
  templateUrl: './allfaculties.component.html',
  styleUrls: ['./allfaculties.component.css']
})
export class AllfacultiesComponent implements OnInit {

    faculty:faculty[];

constructor(private service:Service) { }

ngOnInit() {
    
    this.faculty = this.service.getAllFaculties();
    
}


}



  
  





