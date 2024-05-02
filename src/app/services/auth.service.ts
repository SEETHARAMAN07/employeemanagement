import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router:Router) { }

  isAuthenticated():boolean{
    if(sessionStorage.getItem('login')!==null)
      {
        return true;
      }
      return false;
  }

  canAccess()
  {
    if(!this.isAuthenticated())
      {
        this.router.navigateByUrl('')

      }
  }

}
