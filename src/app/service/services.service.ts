import { Injectable, Input } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  @Input()

  rid = localStorage.getItem('regid')
  rpa = localStorage.getItem('regpass')
  lid = localStorage.getItem('lemail')
  lps = localStorage.getItem('lpass')


  constructor() { }
  verify() {
    console.log(this.rid);

    if (this.rid  === this.lid && this.rpa === this.lps) {
      console.log(this.rid);
      window.alert('Invalid user')


      return true
    } else {
      // window.alert('you have to login first')
      return false
    }
  }


}




