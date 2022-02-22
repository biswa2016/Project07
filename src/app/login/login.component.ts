import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthGuard } from '../guards/auth.guard';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor( private route:Router) { }

  rid=localStorage.getItem('regid')
  rpa=localStorage.getItem('regpass')
  lid=localStorage.getItem('lemail')
  lps=localStorage.getItem('lpass')

  ngOnInit(): void {
  }
  login(from:NgForm){
    if (this.rid === this.lid && this.rpa === this.lps) {
      this.route.navigate(['box'])
    }else{
      window.alert('You need to login first')
    }
    localStorage.setItem("lemail",from.value.email)
    localStorage.setItem("lpass",from.value.pass)
    window.alert('Your Successful login')
    console.log(from.value);


  }

}
