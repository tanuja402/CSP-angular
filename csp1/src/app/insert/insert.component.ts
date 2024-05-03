import { Component } from '@angular/core';
import {inter,UniqueConstraintError,InsertedSuccess ,Read} from '../allow';
import {Subscription} from 'rxjs';
import { cspserviceService } from '../cspservices.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-insert',
  templateUrl: './insert.component.html',
  styleUrls: ['./insert.component.css']
})
export class InsertComponent {
  disease='';
  symptoms='';


  insertUser(item:any){
    this.disease=item.name;
    console.log(this.disease);
}
  constructor(private Service:cspserviceService) {}

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
   Insert(form:NgForm){
    this.ErrorMsg='';
    this.SuccessMsg='';
       this.Subscription = this.Service.Insert(form.value).subscribe(
        (data:any)=>{
          if(data){
            console.log(data);
            // document.write("inserted succesfully");
            this.SuccessMsg="Inserted Succesfully"

          }
          else{
            console.log("Failed");
            alert("Unique constraint error");
            this.ErrorMsg="User Already Exists"
          }
        }
        
        )
        form.reset();
      }
}
