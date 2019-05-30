import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';

import {RouterModule,Routes} from '@angular/router';
import { AllfacultiesComponent } from './allfaculties/allfaculties.component';
import { Service } from './service.service';
import { FacultybynameComponent } from './facultybyname/facultybyname.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FacultybystreamComponent } from './facultybystream/facultybystream.component';
import { DbcomponenetComponent } from './dbcomponenet/dbcomponenet.component';
import { AddComponent } from './add/add.component';
export const routes:Routes=[
                            { path:'home',component:HomeComponent},
                            { path:'viewAllFaculties',component:AllfacultiesComponent},
                            { path:'facultybyName',component:FacultybynameComponent},
                            { path:'facultybyStream',component:FacultybystreamComponent},
                            { path:'externalServer',component:DbcomponenetComponent},
                            { path:'add',component:AddComponent},
                            ]

@NgModule({
  declarations: [
HeaderComponent,
FooterComponent,
    AppComponent,
    HomeComponent,
    AllfacultiesComponent,
    FacultybynameComponent,
 
    FacultybystreamComponent,
 
    DbcomponenetComponent,
 
    AddComponent
    
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [Service],
  bootstrap: [AppComponent]
})
export class AppModule { }
