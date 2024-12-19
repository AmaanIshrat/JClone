import { CommonModule } from '@angular/common';
import { Component, OnInit, Inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthPopupComponent } from '../authpopup/authpopup.component';
import { AuthService } from '../../core/services/authservice.service';
import { Router, RouterLink } from '@angular/router';
import { isPlatformBrowser } from '@angular/common';
import { PLATFORM_ID } from '@angular/core';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [FormsModule, CommonModule, AuthPopupComponent, RouterLink],
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent implements OnInit {
  selectedTab: string = 'sites'; 
  dropdownVisible: boolean = false; // Default selected tab

  isAuthenticated: boolean = false;
  userName: string | null = null; // Store the name part of the email
  sites = [
    { name: 'ecom', icon: '🛒', date: '10 Dec 2024' },
    { name: 'Amaanportfolio', icon: '🌐', date: '10 Dec 2024' },
    { name: 'inform', icon: 'ℹ️', date: '10 Dec 2024' },
  ];

  constructor(
    private authService: AuthService,
    private router: Router,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}
  selectTab(tab: string) {
    this.selectedTab = tab;
  }
  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      // Check authentication status
      this.isAuthenticated = this.authService.isAuthenticated();
      this.userName = this.authService.getUserName(); // Get the user's name
    }
  }

  logout(): void {
    this.isAuthenticated = false;
    this.userName = null; // Clear the name
    if (isPlatformBrowser(this.platformId)) {
      this.authService.logout();
    }
    this.router.navigate(['/home']);
  }

  toggleDropdown(): void {
    this.dropdownVisible = !this.dropdownVisible; // Toggle dropdown menu visibility
  }
    // Function to handle redirection
    redirectToManageSite() {
      this.router.navigate(['/manage']);
    }
    navigateToSites(): void {
      this.router.navigate(['/sites']);
    }
}
