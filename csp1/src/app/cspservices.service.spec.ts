import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from'@angular/common/http';
import {inter,UniqueConstraintError,InsertedSuccess ,Read} from './allow';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class service1 {

  constructor(private http:HttpClient) { }
  headers = new HttpHeaders({
    'content-type':'application/json',
    Authentication:'Bearer' + localStorage.getItem('token'),
  });
  private url ='http://localhost:3000/';

  Insert(
    Details:inter
  ):Observable<InsertedSuccess | UniqueConstraintError> {
    return this.http.post<InsertedSuccess | UniqueConstraintError>(
      this.url + 'Milkcollections/Insert',
      Details,
      {headers:this.headers}
    );

  } 
  Read(Idnumber:string):Observable<InsertedSuccess>{
    console.log(`${this.url}Milkcollections/Read${Idnumber}`);
    return this.http.get<InsertedSuccess>(
      `${this.url}Milkcollections/Read${Idnumber}`
    );
  }
  
  Delete(Idnumber:string):Observable<InsertedSuccess>{
    console.log(`${this.url}Milkcollections/Delete${Idnumber}`);
    return this.http.delete<InsertedSuccess>(
      `${this.url}Milkcollections/Delete${Idnumber}`
    );
  }
  Update(
    Idnumber:string,Details:inter) {
    return this.http.put(`${this.url }Milkcollections/Update${Idnumber}`,Details,{headers:this.headers}
    );
}
}
