import { Component } from '@angular/core';
import { AuthPopupComponent } from '../../components/authpopup/authpopup.component';

@Component({
  selector: 'app-share',
  standalone: true,
  imports: [AuthPopupComponent],
  templateUrl: './share.component.html',
  styleUrl: './share.component.scss'
})
export class ShareComponent {

}
