import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/core/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }
  canActivate(
    route: ActivatedRouteSnapshot): boolean {
      const expectedRole = route.data['expectedRole'];
      const role = this.authService.getRole();

      if (!this.authService.isAuthenticated()) {
        this.authService.logout();
        return false;
      }

      if (role !== expectedRole) {
        this.router.navigate([role!.toLowerCase()]);
      }
      return true;
  }

}
