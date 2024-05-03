export interface inter1 {
    yourname:string;
    youremail:string;
    password:string;
    confirmpassword:string;
    
  
  
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