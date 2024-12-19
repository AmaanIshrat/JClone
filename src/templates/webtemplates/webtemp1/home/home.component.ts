import { Component } from '@angular/core';
import { RouterLink ,Router} from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  constructor(private router: Router) { }

  navigateToAbout(): void {
    this.router.navigate(['/about']);
  }

}
