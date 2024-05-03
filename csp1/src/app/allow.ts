export interface inter {
  idnumber:string;
  dd:string;
  Farmername:string;
  Milkperday:string;
  Fatquantity:string;
  Costgiven:string;



}
export interface UniqueConstraintError {
  errorNum: Number;
  offset: Number;
}
export interface InsertedSuccess {
  Result: any;
  lastRowid: String;
  rowsAffected: Number;
}
export interface Read {
    Result: [];
  }