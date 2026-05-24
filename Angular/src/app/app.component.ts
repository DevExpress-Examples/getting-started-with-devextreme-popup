import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    standalone: false
})
export class AppComponent {
  isPopupVisible: boolean;

  constructor() {
    this.isPopupVisible = true;
  }

  togglePopup(): void {
    this.isPopupVisible = !this.isPopupVisible;
  }
}
