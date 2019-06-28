import { Component} from '@angular/core';
import { FormBuilder, Validators} from '@angular/forms';
import { Passwordvalidator } from '../../shared//password.validator'

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent {
  a :boolean
  b :any

  constructor(private Fb :FormBuilder,
    private Fr : FormBuilder,
    ){
      this.a = true;
      this.b = this.loginForm.get("password");

    }

  loginForm = this.Fb.group({
    email : ['',Validators.compose([
    Validators.required,
    Validators.pattern("^[a-zA-Z0-9.!#$%&’*+/\/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)+$")]
    )],
    password : ['',Validators.compose([
      Validators.required,
      Validators.pattern(`^(?=^.{4,8}$)(?=.*\\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&;*()_+}{"":'?\/<.>,])(?!.*\\s).*$`)
    ])]
 })

  registorForm = this.Fr.group({
    email : ['',Validators.compose([Validators.required,
    Validators.pattern("^[a-zA-Z0-9.!#$%&’*+/\/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)+$")])],
    password : ['',Validators.compose([Validators.required,
      Validators.pattern(`^(?=^.{4,8}$)(?=.*\\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&;*()_+}{"":'?\/<.>,])(?!.*\\s).*$`)])],
    conPassword : ['',Validators.required]},{validator: Passwordvalidator}
  );



  toggleForm(){
    this.a= false;
  }

  toggleLoginForm(){
    this.a = true;
  }

  get email(){
  return this.loginForm.get("email");
  }

  get password(){
    return this.loginForm.get("password");
  }

  get mail(){
      return this.registorForm.get("email");
  }

  get pass(){
        return this.registorForm.get("password");
  }

  get conPassword(){
          return this.registorForm.get("conPassword");
  }
  
  

}