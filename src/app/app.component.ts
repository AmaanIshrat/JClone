import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
// import {HeaderComp}

import { NavabrComponent } from './shared/navabr/navabr.component';
import { FooterComponent } from './shared/footer/footer.component';

import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FooterComponent,NavabrComponent, CommonModule,],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'JColne';
  showHeaderAndFooter: boolean = true;

  constructor(private router: Router) {
    // Listen for route changes and set visibility accordingly
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      // Check if the current route contains '/user' or '/template' and hide header/footer
      const currentUrl = this.router.url;
      this.showHeaderAndFooter = !(currentUrl.includes('/user') || currentUrl.includes('/webtemp1')|| currentUrl.includes('/webtemp2'));
    });
  }
  isTemplateRoute = false;

}
