import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { HomePageService } from './home-page.service';
import { Passwordvalidator } from '../../shared//password.validator'

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent {
  a: boolean
  b: any
  registrationError : string
  loginError : string
  apiInProgress :boolean

  constructor(private Fb: FormBuilder,
    private Fr: FormBuilder,
    private homePageService: HomePageService)
   {
    this.a = true;
    this.b = this.loginForm.get("password");
    }

  loginForm = this.Fb.group({
    email: ['', Validators.compose([
      Validators.required,
      Validators.pattern("^[a-zA-Z0-9.!#$%&’*+/\/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)+$")]
    )],
    password: ['', Validators.compose([
      Validators.required,
      Validators.pattern(`^(?=^.{4,8}$)(?=.*\\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&;*()_+}{"":'?\/<.>,])(?!.*\\s).*$`)
    ])]
  })

  registorForm = this.Fr.group({
    email: ['', Validators.compose([Validators.required,
    Validators.pattern("^[a-zA-Z0-9.!#$%&’*+/\/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)+$")])],
    password: ['', Validators.compose([Validators.required,
    Validators.pattern(`^(?=^.{4,8}$)(?=.*\\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&;*()_+}{"":'?\/<.>,])(?!.*\\s).*$`)])],
    conPassword: ['', Validators.required],
    user: ['', Validators.required]
  }, { validator: Passwordvalidator }
  );

toggleForm() {
    this.a = false;
    this.registorForm.reset();
  }

  toggleLoginForm() {
    this.a = true;
    this.loginForm.reset();
  }

  get email() {
    return this.loginForm.get("email");
  }

  get password() {
    return this.loginForm.get("password");
  }

  get mail() {
    return this.registorForm.get("email");
  }

  get pass() {
    return this.registorForm.get("password");
  }

  get conPassword() {
    return this.registorForm.get("conPassword");
  }

  async onLogin(formData) {
    this.apiInProgress= true;
    const poll = await this.homePageService.login(formData);
    this.loginError = poll['data'];
    this.apiInProgress= false;
  }
  async onRegistration(formData) {
    this.apiInProgress= true;
  const poll = await this.homePageService.registration(formData);
 this.registrationError = poll['message'];
 this.apiInProgress= false;
  
  }


}