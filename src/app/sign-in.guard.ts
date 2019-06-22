import { ApiService } from './services/api.service';
import { Injectable } from '@angular/core';
import { CanActivateChild, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SignInGuard implements CanActivateChild {
  constructor(private router:Router,private apiService:ApiService){}
  canActivateChild(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if(this.apiService.getLogin())
    {
      return true;
    }
    else
    {
      this.router.navigate(['login']);
      return false;
    }
  }
  
}
