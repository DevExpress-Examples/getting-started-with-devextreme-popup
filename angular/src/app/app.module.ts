import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';

import { DxButtonModule } from "devextreme-angular/ui/button"
import { DxPopupModule } from "devextreme-angular/ui/popup"

@NgModule({
    declarations: [AppComponent],
    imports: [BrowserModule, DxPopupModule, DxButtonModule],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}
