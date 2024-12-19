import { CommonModule } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { isPlatformBrowser } from '@angular/common';
import { PLATFORM_ID } from '@angular/core';

@Component({
  selector: 'app-auth-popup',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './authpopup.component.html',
  styleUrls: ['./authpopup.component.scss']
})
export class AuthPopupComponent {
  isVisible: boolean = false; // Controls popup visibility
  popupType: 'signin' | 'create-account' = 'signin'; // Controls popup type
  email: string = '';
  password: string = '';
  phoneNumber: string = '';

  isAuthenticated: boolean = false; // Tracks authentication status
  userEmail: string | null = null; // Stores the user's email

  constructor(
    private router: Router,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  showPopup(type: 'signin' | 'create-account'): void {
    this.isVisible = true;
    this.popupType = type;
  }

  closePopup(): void {
    this.isVisible = false;
  }

  switchPopup(type: 'signin' | 'create-account', event: Event): void {
    event.preventDefault(); 
    this.popupType = type;
  }

  handleSubmit(type: 'signin' | 'create-account', form: any): void {
    if (form.valid) {
      console.log(`${type} form submitted`, form.value);

      // Simulate successful login
      this.isAuthenticated = true; 
      this.userEmail = this.email; // Set the user's email
      
      // Only access localStorage if in browser
      if (isPlatformBrowser(this.platformId)) {
        localStorage.setItem('isAuthenticated', 'true');
        localStorage.setItem('userEmail', this.email); // Save email in localStorage
      }

      this.router.navigate(['/user']); // Navigate to user page
      this.isVisible = false; // Optionally close the popup
    } else {
      alert('Please fill in all required fields.');
    }
  }

  ngOnInit(): void {
    // Retrieve authentication status and email on component initialization
    if (isPlatformBrowser(this.platformId)) {
      this.isAuthenticated = localStorage.getItem('isAuthenticated') === 'true';
      this.userEmail = localStorage.getItem('userEmail');
    }
  }
}
