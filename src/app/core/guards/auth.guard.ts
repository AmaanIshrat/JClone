import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { isPlatformBrowser } from '@angular/common'; // Import to check platform

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router, @Inject(PLATFORM_ID) private platformId: any) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {

    // Check if the platform is browser
    if (isPlatformBrowser(this.platformId)) {
      const isAuthenticated = localStorage.getItem('isAuthenticated');

      // If authenticated, allow access to the user page
      if (isAuthenticated === 'true') {
        return true; // Allow access to user page
      } else {
        // Redirect to home page if not authenticated
        this.router.navigate(['/home']);
        return false;
      }
    }

    // Redirect to home page for SSR or non-browser environments
    this.router.navigate(['/home']);
    return false;
  }
}
