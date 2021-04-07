import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";

import {
    DxPopupModule,
    DxButtonModule,
    DxScrollViewModule
} from "devextreme-angular";

@NgModule({
    declarations: [AppComponent],
    imports: [BrowserModule, DxPopupModule, DxButtonModule, DxScrollViewModule],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}
