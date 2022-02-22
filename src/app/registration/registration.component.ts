import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  uname:any
  constructor(private route:Router) { }

  ngOnInit(): void {
  }
  
  onSubmit(from:NgForm){
    localStorage.setItem("regid", from.value.email)
    localStorage.setItem("regpass", from.value.pass)
    window.alert('Registration Successfully')
   this.uname= console.log(from.value.name);
    this.route.navigate(['log'])
    
  }

}
