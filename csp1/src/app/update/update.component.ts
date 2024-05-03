import { Component } from '@angular/core';
import {inter,UniqueConstraintError,InsertedSuccess ,Read} from '../allow';
import {Subscription} from 'rxjs';
import { cspserviceService } from '../cspservices.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent {
  canShowData:boolean=false;
  constructor(private Service:cspserviceService) {}
   ngOnInit() {
   }
   Subscription:Subscription=new Subscription();
   User:inter ={
    idnumber: '',
    dd: '',
    Farmername: '',
    Milkperday: '',
    Fatquantity: '',
    Costgiven: ''
   };
    SuccessMsg='';
    ErrorMsg='';
    a=[];
    Read() {
     this.Subscription = this.Service.Read(this.User.idnumber ).subscribe(
           (data)=>{
             if(data){
                 this.canShowData=true;
                 console.log(data);
                 this.a=data.Result[0];
                 this.User ={
                   idnumber:this.a[0],
                   dd:this.a[1],
                   Farmername:this.a[2],
                   Milkperday:this.a[3],
                   Fatquantity:this.a[4],
                   Costgiven:this.a[5]
                   
                   
                  };
                 console.log(data.Result);
                 console.log(this.a);
 
               }
             else{
                 console.log("Failed");
               }
            }
         )
     }
     ngOnDestroy() {
       this.Subscription.unsubscribe();
     }
     
 
   
    Update(){
     this.ErrorMsg='';
     this.SuccessMsg='';
        this.Subscription = this.Service.Update(this.User.idnumber,this.User).subscribe(
         (data)=>{
           if(data){
             console.log(data);
             this.SuccessMsg="Updated Succesfully"
 
           }
           else{
             console.log("Failed");
             this.ErrorMsg="Failed Updating"
           }
         }
       )
     }
 
   }
 
