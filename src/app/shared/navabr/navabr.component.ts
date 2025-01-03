import { Component, OnInit ,HostListener} from '@angular/core';
import { RouterLink } from '@angular/router';
import { AuthPopupComponent } from '../../components/authpopup/authpopup.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../core/services/authservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navabr',
  standalone: true,
  imports: [RouterLink, AuthPopupComponent, FormsModule, CommonModule],
  templateUrl: './navabr.component.html',
  styleUrl: './navabr.component.scss',
})
export class NavabrComponent implements OnInit {
  isAuthenticated: boolean = false; 
  userName: string | null = null; // Store the name part of the email
  dropdownVisible: boolean = false;

  constructor(
    private authService: AuthService, 
    private router: Router
  ) {}

  ngOnInit(): void {
    this.checkAuthentication();
  }

  checkAuthentication(): void {
    this.isAuthenticated = this.authService.isAuthenticated();
    if (this.isAuthenticated) {
      this.userName = this.authService.getUserName(); // Use `getUserName` method to get the name part
    }
  }

  logout(): void {
    this.authService.logout();
    this.checkAuthentication(); // Update UI after logout
  }

  navigateToDashboard(): void {
    this.router.navigate(['/user']); 
    this.dropdownVisible = false; 
  }

  toggleDropdown(): void {
    this.dropdownVisible = !this.dropdownVisible;
  }
  
  mobileMenuOpen = false;

  toggleMobileMenu() {
    this.mobileMenuOpen = !this.mobileMenuOpen;
  }

 
  
  
  showProductsDropdown: boolean = false;
  showSupportDropdown: boolean = false;

  toggleDropdown1(menu: string, event: Event): void {
    event.preventDefault();
    event.stopPropagation();

    if (menu === 'products') {
      this.showProductsDropdown = !this.showProductsDropdown;
      this.showSupportDropdown = false; // Close the other dropdown
    } else if (menu === 'support') {
      this.showSupportDropdown = !this.showSupportDropdown;
      this.showProductsDropdown = false; // Close the other dropdown
    }
  }

  @HostListener('document:click')
  closeDropdowns(): void {
    this.showProductsDropdown = false;
    this.showSupportDropdown = false;
  }
  closeMobileMenu(): void {
    this.mobileMenuOpen = false;
  }
}