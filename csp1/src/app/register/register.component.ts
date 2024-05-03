import { Component } from '@angular/core';
import{FormGroup,FormControl,Validators} from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
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




