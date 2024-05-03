import { Component } from '@angular/core';
import{FormGroup,FormControl,Validators} from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  loginForm= new FormGroup({
    user:new FormControl('',[Validators.required,Validators.email]),
    password:new FormControl('',[Validators.required,Validators.minLength(7)]),
  })
  loginUser()
  {
    console.warn(this.loginForm.value)
  }
get user()
{
  return this.loginForm.get('user');
}
get password()
{
  return this.loginForm.get('password');
}
}

/*
import { Component, OnInit,OnDestroy} from "@angular/core";
import{FormGroup,FormControl,Validators} from '@angular/forms';
import { cspserviceService } from "../cspservices.service";
import { InsertedSuccess, Read, DonorDetails, userDetails } from './allow';
import { Subscription } from "rxjs";
import { Router } from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit,OnDestroy{
  username:string='';
  password:string='';
//   loginForm= new FormGroup({
//     user:new FormControl('',[Validators.required,Validators.email]),
//     password:new FormControl('',[Validators.required,Validators.minLength(7)]),
//   })
//   loginUser()
//   {
//     console.warn(this.loginForm.value)
//   }
// get user()
// {
//   return this.loginForm.get('user');
// }
// get password()
// {
//   return this.loginForm.get('password');
// }

ngOnInit() {
  
}
subcription:Subscription= new Subscription();
  public data=[];

  constructor(private Service: CRUDService, private route:Router) {}
  UpdatedUser:userDetails= {
    
    name:'',
    email:'',
    pass:''
  };

  Results = [];
  Read() {
    this.username=this.UpdatedUser.email as string;
    this.password=this.UpdatedUser.pass as string;
    this.Service.ReadU(this.UpdatedUser.email).subscribe(
       (Data: any) => {
        if(Data){
          this.data=Data.Result[0];
          this.UpdatedUser={
            name:this.data[0],
            email:this.data[1],
            pass :this.data[2]
    
          }
          if(this.username==this.UpdatedUser.email 
            && this.password==this.UpdatedUser.pass)
            {
              // document.write("success");
              this.route.navigate(['/home'])
            }
          else{
            alert('Invaalid username or password')
          }
        }
        else{
          console.log('failed')
        }
  })
}



  ngOnDestroy(){
    this.subcription.unsubscribe();
  }
}
*/