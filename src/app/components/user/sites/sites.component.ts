import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ShareComponent } from '../../../shared/share/share.component';

@Component({
  selector: 'app-sites',
  standalone: true,
  imports: [CommonModule,ShareComponent],
  templateUrl: './sites.component.html',
  styleUrl: './sites.component.scss'
})
export class SitesComponent {
  activeTab: string = 'website_templates'; // Default active tab

  // Function to change active tab
  selectTab(tab: string): void {
    this.activeTab = tab;
  }
  
}
