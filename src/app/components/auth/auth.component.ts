import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router'
import{ FormBuilder, Validators} from '@angular/forms'
import { AuthService } from './auth.service'
import { Passwordvalidator } from '../../components/new-poll/shared/password.validator';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  check: boolean
  getpassword: any
  registrationError: string
  loginError: string
  apiInProgress: boolean

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private route: Router,
    private activatedRoute: ActivatedRoute
  ) {
    this.check = true;
    this.getpassword = this.loginForm.get("password");
   }

  ngOnInit() {
  }
  loginForm = this.formBuilder.group({
    email: ['', Validators.compose([
      Validators.required,
      Validators.pattern("^[a-zA-Z0-9.!#$%&’*+/\/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)+$")]
    )],
    password: ['', Validators.compose([
      Validators.required,
      Validators.pattern(`^(?=^.{4,8}$)(?=.*\\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&;*()_+}{"":'?\/<.>,])(?!.*\\s).*$`)
    ])]
  })

  registorForm = this.formBuilder.group({
    email: ['', Validators.compose([Validators.required,
    Validators.pattern("^[a-zA-Z0-9.!#$%&’*+/\/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)+$")])],
    password: ['', Validators.compose([Validators.required,
    Validators.pattern(`^(?=^.{4,8}$)(?=.*\\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&;*()_+}{"":'?\/<.>,])(?!.*\\s).*$`)])],
    conPassword: ['', Validators.required],
    user: ['', Validators.required]
  }, { validator: Passwordvalidator }
  );

  toggleForm() {
    this.check= false;
    this.registorForm.reset();
  }

  toggleLoginForm() {
    this.check = true;
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
    this.apiInProgress = true;
    const poll = await this.authService.login(formData);
    if(!poll['error']) {
      localStorage.setItem("token",poll['token'])
      this.route.navigate(['dashboard/newpoll'])
    } else {
      this.loginError = poll['data'];
    }
    this.apiInProgress = false;
  }

  async onRegistration(formData) {
    this.apiInProgress = true;
    const poll = await this.authService.registration(formData);
    this.registrationError = poll['message'];
    if (this.registrationError == "Account Already Exists!") {
      this.registorForm.reset();
    } else {
      this.onLogin(formData);
    }
    this.apiInProgress = false;
 }
 
  cleareData() {  
    localStorage.clear();
  }

}
