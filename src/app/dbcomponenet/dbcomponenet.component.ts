import { Component, OnInit } from '@angular/core';
import { Service } from '../service.service';
import {trainer} from '../Faculty/trainer';
@Component({
  selector: 'app-dbcomponenet',
  templateUrl: './dbcomponenet.component.html',
  styleUrls: ['./dbcomponenet.component.css']
})
export class DbcomponenetComponent implements OnInit {

    trainer:any;
trainers:any;

errormessage:string;

constructor(private service:Service) { }

ngOnInit() {
  
   this.service.getAllTrainers().subscribe((data)=>{
      
       console.log("trainer---"+data);
       //this.Computercenter = data;
      // this.Computercenter = data;
       this.trainers= data;
      // console.log("trainer- afte array--"+this.trainers[0].Trainer_Id);
      // var stringifiedData = this.trainer); 
       //his.trainer=stringifiedData;
      // console.log("**mResults in Stringify"+stringifiedData);
       
       
       
   },(error)=>{
       console.log(error);
       this.errormessage = error;
   });

}

deleteTrainer(trainer1:trainer){
    console.log("trainer_id-->"+trainer1.Trainer_Id);
    
    this.service.deleteTrainer(trainer1).subscribe((data)=>{
        
        console.log("trainer---"+data);
        //this.Computercenter = data;
       // this.Computercenter = data;
        this.trainer= data;
        console.log("trainer- afte array--"+this.trainer[0].Trainer_Id);
       // var stringifiedData = this.trainer); 
        //his.trainer=stringifiedData;
       // console.log("**mResults in Stringify"+stringifiedData);
        
        
        
    },(error)=>{
        console.log(error);
        this.errormessage = error;
    });
}


UpdateTrainer(trainer1:trainer){
    
    
    console.log("trainer_id-->"+trainer1.Trainer_Id);
    console.log("trainername-->"+trainer1.Trainer_Name);
    
    this.service.UpdateTrainer(trainer1).subscribe((data)=>{
        
        console.log("trainer---"+data);
        //this.Computercenter = data;
       // this.Computercenter = data;
        this.trainer= data;
        console.log("trainer- afte array--"+this.trainer[0].Trainer_Id);
       // var stringifiedData = this.trainer); 
        //his.trainer=stringifiedData;
       // console.log("**mResults in Stringify"+stringifiedData);
        
        
        
    },(error)=>{
        console.log(error);
        this.errormessage = error;
    });
}


}
