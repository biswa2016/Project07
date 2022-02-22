import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FormBuilder,FormGroup } from '@angular/forms';

@Component({
  selector: 'app-box',
  templateUrl: './box.component.html',
  styleUrls: ['./box.component.css']
})
export class BoxComponent implements OnInit {
  value:any
  msg:any
  arr:any=[]
formValue !:FormGroup
  constructor(private formbuilder:FormBuilder) { }

  ngOnInit(): void {
   this.formValue=this.formbuilder.group({
     message:''
   })

  }

  sendmsg(){
     this.value=this.formValue.value.message

    console.log(this.formValue.value);
    
    console.log(this.value);
    this.arr.push(this.formValue.value)
    localStorage.setItem(`show`,JSON.stringify(this.arr));
     console.log(this.arr);

    console.log(localStorage.getItem(`show`));
    
    this.formValue.reset();
    this.msg=this.arr
    
    
  }
  

}
