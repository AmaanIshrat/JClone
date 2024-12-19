import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor() {}

  isAuthenticated(): boolean {
    return localStorage.getItem('isAuthenticated') === 'true';
  }

  getUserEmail(): string | null {
    return localStorage.getItem('userEmail');
  }

  login(userEmail: string): void {
    localStorage.setItem('isAuthenticated', 'true');
    localStorage.setItem('userEmail', userEmail);
  }

  logout(): void {
    localStorage.removeItem('isAuthenticated');
    localStorage.removeItem('userEmail');
  }

  // **New Method**: Extract name from email
  getUserName(): string | null {
    const email = this.getUserEmail();
    return email ? email.split('@')[0] : null; // Extract part before '@'
  }
}
