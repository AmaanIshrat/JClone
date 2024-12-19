import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AuthPopupComponent } from '../authpopup/authpopup.component';
import { ShareComponent } from '../../shared/share/share.component';

@Component({
  selector: 'app-price',
  standalone: true,
  imports: [CommonModule,AuthPopupComponent,ShareComponent],
  templateUrl: './price.component.html',
  styleUrl: './price.component.scss'
})
export class PriceComponent {


  activeTab: string = 'informative';

  // Plans for Informative
  informativePlans = [
    {
      title: 'Landing Page',
      subtitle: 'For single page',
      originalPrice: '₹219',
      discountedPrice: '₹119',
      saveInfo: 'Save 46% Annually',
      annualPrice: 'Just ₹1428/year with Annual Payment!'
    },
    {
      title: 'Basic',
      subtitle: 'For personal use',
      originalPrice: '₹379',
      discountedPrice: '₹249',
      saveInfo: 'Save 34% Annually',
      annualPrice: 'Just ₹2988/year with Annual Payment!'
    },
    {
      title: 'Standard',
      subtitle: 'For business use',
      originalPrice: '₹649',
      discountedPrice: '₹425',
      saveInfo: 'Save 35% Annually',
      annualPrice: 'Just ₹5100/year with Annual Payment!'
    }
  ];

  // Plans for eCommerce
  ecommercePlans = [
    {
      title: 'Starter Store',
      subtitle: 'For small stores',
      originalPrice: '₹499',
      discountedPrice: '₹299',
      saveInfo: 'Save 40% Annually',
      annualPrice: 'Just ₹3588/year with Annual Payment!'
    },
    {
      title: 'Professional Store',
      subtitle: 'For growing businesses',
      originalPrice: '₹799',
      discountedPrice: '₹499',
      saveInfo: 'Save 38% Annually',
      annualPrice: 'Just ₹5988/year with Annual Payment!'
    },
    {
      title: 'Enterprise Store',
      subtitle: 'For large businesses',
      originalPrice: '₹1199',
      discountedPrice: '₹899',
      saveInfo: 'Save 25% Annually',
      annualPrice: 'Just ₹10,788/year with Annual Payment!'
    }
  ];

  // Features for the Table
  features = [
    {
      name: 'Connect Your Domain',
      landingPage: '<span class="check-icon">✔</span>',
      basic: '<span class="check-icon">✔</span>',
      standard: '<span class="check-icon">✔</span>'
    },
    {
      name: 'SSL Certificate',
      landingPage: '<span class="check-icon">✔</span>',
      basic: '<span class="check-icon">✔</span>',
      standard: '<span class="check-icon">✔</span>'
    },
    {
      name: 'Customizable Templates',
      landingPage: '<span class="cross-icon">✘</span>',
      basic: '<span class="check-icon">✔</span>',
      standard: '<span class="check-icon">✔</span>'
    },
    {
      name: 'Priority Support',
      landingPage: '<span class="cross-icon">✘</span>',
      basic: '<span class="cross-icon">✘</span>',
      standard: '<span class="check-icon">✔</span>'
    },
    {
      name: 'Storage Space',
      landingPage: '1 GB',
      basic: '10 GB',
      standard: '50 GB'
    }
  ];

  // Active Plans
  activePlans = this.informativePlans;

  // Switch Tabs
  switchTab(tab: string) {
    this.activeTab = tab;
    this.activePlans = tab === 'informative' ? this.informativePlans : this.ecommercePlans;
  }
}
