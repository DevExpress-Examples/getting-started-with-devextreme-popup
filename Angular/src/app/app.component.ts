import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
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
