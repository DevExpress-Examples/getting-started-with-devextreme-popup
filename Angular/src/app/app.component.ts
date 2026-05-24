import { Component } from '@angular/core';

import { DxButtonModule } from 'devextreme-angular/ui/button';
import { DxPopupModule } from 'devextreme-angular/ui/popup';

@Component({
    selector: 'app-root',
    imports: [DxButtonModule, DxPopupModule],
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
