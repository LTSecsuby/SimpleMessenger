import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarMenuComponent } from './navbar-menu/navbar-menu.component';
import { NavbarContentComponent } from './navbar-content/navbar-content.component';
import { NavbarUserComponent } from './navbar-user/navbar-user.component';
import { ToolbarUserComponent } from './toolbar-user/toolbar-user.component';
import { ToolbarContentComponent } from './toolbar-content/toolbar-content.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarMenuComponent,
    NavbarContentComponent,
    NavbarUserComponent,
    ToolbarUserComponent,
    ToolbarContentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
