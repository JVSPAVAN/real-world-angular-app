import { Injectable } from '@angular/core';

import { faculty } from '../app/Faculty/faculty';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

import {delay,catchError} from 'rxjs/operators';

import {trainer} from '../app/Faculty/trainer';
import { throwError } from 'rxjs';
import { Http, RequestOptions, Response, Headers } from "@angular/http";

@Injectable()
export class Service {

    faculty:faculty[];
headers:Headers;
    

constructor(private http:Http) {
    this.headers = new Headers();
    this.headers.append('Content-Type', 'application/json');
    this.headers.append('Access-Control-Allow-Origin', '*');
  

 
 this.faculty  = [ {facName:'Priya',stream:'Java',location:'CHN'},
                     {facName:'Mani',stream:'Java',location:'CHN'},
                     {facName:'Febin',stream:'Java',location:'TVM'},
                     {facName:'Manasa',stream:'Java',location:'HYD'},
                     {facName:'Revathy',stream:'.Net',location:'CHN'},
                     {facName:'Krithiga',stream:'.Net',location:'CHN'},
                     {facName:'Nagalakshmi',stream:'CM',location:'CHN'},
                 ];
 

}

private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }


getAllTrainers(): Observable<trainer[]> {
    
    return this.http.post('http://localhost:8080/ComputerTrainingCenter/Controller?action=ViewAll','').pipe(map((resp)=>{
     
        return this.handleResponse(resp);
        
        
    }),catchError((error)=>{
        
        
        return throwError(error);
        //return Observable.throw("Server Communication Failed");
    }))

    //return Observable.of(this.customers).pipe(delay(5000));

}


/*deleteTrainer(trainer_id){}*/

deleteTrainer(trainer1: trainer ): Observable<trainer> {
    var trainerid=trainer1.Trainer_Id;
    console.log("in delete trainerid--"+trainerid);
   var  url ='http://localhost:8080/ComputerTrainingCenter/Controller?Trainer_Id='+trainerid+'&action=Delete';
    return this.http.get(url).pipe(map((resp)=>{
        
        return this.handleResponse(resp);
        
        
    }),catchError((error)=>{
        
        
        return throwError(error);
        //return Observable.throw("Server Communication Failed");
    }))

    
    


}



UpdateTrainer( trainer1: trainer ): Observable<trainer> {
    
    console.log("In update trainer in service");


    var trainerid=trainer1.Trainer_Id;
    console.log("in update trainerid--"+trainerid);
    var trainer_exp=trainer1.Trainer_Experience;
    console.log("in update trainer_exp--"+trainer_exp);
    var stream=trainer1.Stream;
    console.log("in update stream--"+stream);
    var contactNum=trainer1.contact_number;
    console.log("in update contactNum--"+contactNum);
    var address=trainer1.Address;
    console.log("in update address--"+address);
    var  url ='http://localhost:8080/ComputerTrainingCenter/Controller?Trainer_Id='+trainerid+'&Trainer_Experience='+trainer_exp+'&Stream='+stream+'&contact_number='+contactNum+'&Address='+address+'&action=Update';
        console.log("url-->"+url);
        let myParams = new URLSearchParams();
        myParams.append('trainerid', trainerid);  
        
        let options = new RequestOptions({ headers: this.headers, params: myParams });
        
        return this.http.get(url).pipe(map((resp)=>{
            
            return this.handleResponse(resp);
            
            
        }),catchError((error)=>{
            
            
            return throwError(error);
            //return Observable.throw("Server Communication Failed");
        }))

        
   
     
     


 }






registertrainer(trainer1:trainer):Observable<trainer[]>{
   console.log("in web");
   var trainerid=trainer1.Trainer_Id;
   console.log("in update trainerid--"+trainerid);
   var trainername=trainer1.Trainer_Name;
   console.log("in update trainerid--"+trainername);
   
   var trainer_exp=trainer1.Trainer_Experience;
   console.log("in update trainer_exp--"+trainer_exp);
   var stream=trainer1.Stream;
   console.log("in update stream--"+stream);
   var contactNum=trainer1.contact_number;
   console.log("in update contactNum--"+contactNum);
   var address=trainer1.Address;
   console.log("in update address--"+address);
   var  url ='http://localhost:8080/ComputerTrainingCenter/Controller?Trainer_Id='+trainerid+'&Trainer_Name='+trainername+'&Trainer_Experience='+trainer_exp+'&Stream='+stream+'&contact_number='+contactNum+'&Address='+address+'&action=Add';
       console.log("url-->"+url);
   
  return this.http.get(url).pipe(
          map ((resp) =>
                  { return <trainer[]>this.handleResponse(resp);
                  }
              ));
  }






getAllFaculties():faculty[]{
    
    return this.faculty;
    
}

getFacultybyName(facultyname:string):faculty{
    console.log("inside service"+facultyname);
   
    return this.faculty.filter((value)=>{
        console.log("inside service value"+value.facName);
        if(value.facName==facultyname){
        return true;
        }

        return false;

        })[0];
        }


getFacultybyStream(stream:string):faculty[]{
    console.log("inside service"+stream);
   
    return this.faculty.filter((value)=>{
        console.log("inside service value"+value.facName);
        if(value.stream==stream){
        return true;
        }

        return false;

        });
        }

handleResponse(resp:any){
    
    if(resp instanceof Response){
        console.log("resp"+resp);
        if(resp.ok==true){
            
            console.log("resp"+resp);
            console.log("text=="+resp.text());
            
            
           console.log("json-->"+resp.json().trainer);
           
         
           
            return resp.json().trainer;
          
          }
            return resp;           
    }else{
        return resp;
    }
    
}

}





