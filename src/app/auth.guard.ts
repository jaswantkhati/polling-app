import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AuthService } from 'src/app/components/auth/auth.service';
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(
    private authservices: AuthService,
    private router: Router
  ) { }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

    if (!state.url.includes('auth')) {
      if (this.authservices.loginToken()) {
        return true;
      } else {
        this.router.navigate(['auth'])
        return false;
      }
    } else {
      if (this.authservices.loginToken()) {
        this.router.navigate(['dashboard/newpoll'])
        return false;
      } else {
        return true;
      }
    }

  }

}
