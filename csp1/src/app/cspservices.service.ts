import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from'@angular/common/http';
import {inter,UniqueConstraintError,InsertedSuccess ,Read} from './allow';
import {Observable} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class cspserviceService {
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
      this.url + 'milkcollections/Insert',
      Details,
      {headers:this.headers}
    );

  } 
  Read(idnumber:string):Observable<InsertedSuccess>{
    console.log(`${this.url}Milkcollections/Read${idnumber}`);
    return this.http.get<InsertedSuccess>(
      `${this.url}Milkcollections/Read${idnumber}`
    );
  }
  
  Delete(idnumber:string):Observable<InsertedSuccess>{
    console.log(`${this.url}Milkcollections/Delete${idnumber}`);
    return this.http.delete<InsertedSuccess>(
      `${this.url}Milkcollections/Delete${idnumber}`
    );
  }
  Update(
    idnumber:string,Details:inter) {
    return this.http.put(`${this.url }Milkcollections/Update${idnumber}`,Details,{headers:this.headers}
    );
}
}







