import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoxComponent } from './box/box.component';
import { Router, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../guards/auth.guard';
import { ServicesService } from '../service/services.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const routes:Routes=[
{path:'',component:BoxComponent ,canActivate:[AuthGuard]}
];
@NgModule({
  declarations: [
    BoxComponent
  ],
  // export:[
  //   BoxComponent
  // ],
  imports: [
    CommonModule,
    FormsModule, 
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ],
  providers: [ServicesService,AuthGuard],
 
 
})
export class CmodulesModule { }
