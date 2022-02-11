import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  loginUser: any;
  constructor(private router: Router){}
  canActivate(
    next: ActivatedRouteSnapshot): boolean {

      const expectedName = next.data.Name;
      const currentName = localStorage.getItem('USERNAME');
      if( currentName !== expectedName){
        this.router.navigateByUrl('login');
        return false;
      }
    return true;
  }
  
}
