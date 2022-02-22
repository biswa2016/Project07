import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { ServicesService } from '../service/services.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private vari:ServicesService){}
  canActivate(){
    if(this.vari.verify()){
      return true;
    }else{
      window.alert('you need to login first')
      return false
    }
   
  }
  
}
