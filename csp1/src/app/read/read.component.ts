// import { Component, OnInit } from '@angular/core';
// import {inter,UniqueConstraintError,InsertedSuccess ,Read} from '../allow';
// import {Subscription} from 'rxjs';
// import { cspserviceService } from '../cspservices.service';


// @Component({
//   selector: 'app-read',
//   templateUrl: './read.component.html',
//   styleUrls: ['./read.component.css']
// })

// export class ReadComponent implements OnInit {
//   ngOnInit(): void {
//     this.Read('All');
//   }
//   constructor(private Service: cspserviceService) {}
//   idnumber: string = '';
//   GotResult: Boolean = false;
//   UpdatedUser: inter = {
//     idnumber: '',
//     dd: '',
//     Farmername: '',
//     Milkperday: '',
//     Fatquantity: '',
//     Costgiven: ''
   
//   };
//   Results = [];
//   Read(idnumber: string) {
//     this.Service.Read(idnumber).subscribe({
//       next: (Data: Read) => {
//         this.Results = Data.Result;
//         this.GotResult = true;
//       },
//       error: (Err) => {
//         console.log(Err);
//       },
//     });
//   }
//   Update(idnumber: string, Details: inter) {
//     this.Service.Update(idnumber, Details).subscribe({
//       next: (Data) => {
//         console.log(Data);
//         this.Read('All');
//       },
//       error: (err) => {
//         console.log(err);
//       },
//     });
//   }
//   Delete(idnumber: string) {
//     this.Service.Delete(idnumber).subscribe({
//       next: (Data: InsertedSuccess) => {
//         console.log(Data.rowsAffected);
//         this.Read('All');
//       },
//       error: (Error) => {
//         console.log(Error);
//       },
//     });
//   }
// }

// /*
// export class ReadComponent {
//   canShowData:boolean=false;
//   constructor(private Service:cspserviceService) {}
//      ngOnInit() {
//      }
//      Subscription:Subscription=new Subscription();
//      User:inter={
//        Idnumber: 0,
//        dd: '',
//        Farmername: '',
//        Milkperday: '',
//        Fatquantity: '',
//        Costgiven: ''
//      };
//     a=[]
 
//  insertUser(item:any){}
//    Read() {
//      this.Subscription = this.Service.Read(this.User.Idnumber).subscribe(
//            (data)=>{
//              if(data){
//                  this.canShowData=true;
//                  console.log(data);
//                  this.a=data.Result[0];
//                  this.User ={
//                    Idnumber:this.a[0],
//                    dd:this.a[1],
//                    Farmername:this.a[2],
//                    Milkperday:this.a[3],
//                    Fatquantity:this.a[4],
//                    Costgiven:this.a[5]
                   
//                   };
//                   console.log(data.Result);
//                   console.log(this.a);
  
//                 }
//               else{
//                   console.log("Failed");
//                 }
//              }
//           )
//       }
//       ngOnDestroy() {
//         this.Subscription.unsubscribe();
//       }
//       
//   
//   }*/
import { Component,OnInit } from '@angular/core';
import {inter,UniqueConstraintError,InsertedSuccess ,Read} from '../allow';
import {Subscription} from 'rxjs';
import { cspserviceService  } from '../cspservices.service';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.css']
})

export class ReadComponent implements OnInit {
  ngOnInit(): void {
    this.Read('All');
  }
  constructor(private Service: cspserviceService) {}
  idnumber: string = '';
  GotResult: Boolean = false;
  UpdatedUser: inter = {
    idnumber: '',
        dd: '',
       Farmername: '',
       Milkperday: '',
       Fatquantity: '',
       Costgiven: ''
  };
  Results = [];
  Data=[];
  a=[];
  Read(idnumber: string) {
    this.Service.Read(idnumber).subscribe({
      next: (Data: Read) => {
        this.Results = Data.Result;
        this.GotResult = true;
      },
      error: (Err) => {
        console.log(Err);
      },
    });
  }

  Read1(idnumber: string) {
    this.Service.Read(idnumber).subscribe({
      next: (Data: Read) => {
        this.Results = Data.Result;
        this.GotResult = true;
        console.log(this.Results[0]);
        this.a=this.Results[0]
        
          this.UpdatedUser.idnumber= this.a[0];
          this.UpdatedUser.dd=this.a[1];
          this.UpdatedUser.Farmername= this.a[2];
          this.UpdatedUser.Milkperday= this.a[3];
          this.UpdatedUser.Fatquantity= this.a[4];
          this.UpdatedUser.Costgiven= this.a[5];
      },
      error: (Err) => {
        console.log(Err);
      },
    });
  }

  Update(idnumber: string, Details: inter) {
    this.Service.Update(this.UpdatedUser.idnumber, Details).subscribe({
      next: (Data) => {
        console.log(Data);
      },
      error: (err) => {
        console.log(err);
        this.Read('All');
      },
    });
  }
  Delete(idnumber: string) {
    this.Service.Delete(idnumber).subscribe({
      next: (Data: InsertedSuccess) => {
        console.log(Data.rowsAffected);
      },
      error: (Error) => {
        console.log(Error);
        this.Read('All');
      },
    });
  }
}
