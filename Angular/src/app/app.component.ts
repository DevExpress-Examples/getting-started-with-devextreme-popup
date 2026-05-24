import { Component } from '@angular/core';

import { DxButtonModule } from 'devextreme-angular/ui/button';

@Component({
    selector: 'app-root',
    imports: [DxButtonModule],
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
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
