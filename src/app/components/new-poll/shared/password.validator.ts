import { AbstractControl} from '@angular/forms';

export function Passwordvalidator(control : AbstractControl): {[key : string]: boolean | null}{
    const password =control.get("password");
    const conPassword = control.get("conPassword");
    if(password.pristine || conPassword.pristine){
        return null;
    }
    return password && conPassword && password.value !== conPassword.value?
    {'misMatch': true} :null;
}