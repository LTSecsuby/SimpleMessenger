import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatInputModule } from '@angular/material/input';

import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { StartMenuComponent } from './start-menu/start-menu.component';
import { NavbarContentComponent } from './navbar-content/navbar-content.component';
import { NavbarUserComponent } from './navbar-user/navbar-user.component';
import { ToolbarUserComponent } from './toolbar-user/toolbar-user.component';
import { ToolbarContentComponent } from './toolbar-content/toolbar-content.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { UserContentComponent } from './user-content/user-content.component';
import {MatMenuModule} from '@angular/material/menu';
import {ContentShowModule} from './content-show/content-show.module';
import {MatListModule} from '@angular/material/list';
import {HttpClientModule} from '@angular/common/http';
import {MatBadgeModule} from '@angular/material/badge';

const appRoutes: Routes = [
  { path: '', component: StartMenuComponent },
  { path: 'start', component: StartMenuComponent },
  { path: 'user', component: UserContentComponent },
  { path: '**', component: StartMenuComponent }
  ];


@NgModule({
  declarations: [
    AppComponent,
    StartMenuComponent,
    NavbarContentComponent,
    NavbarUserComponent,
    ToolbarUserComponent,
    ToolbarContentComponent,
    UserContentComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatButtonToggleModule,
    MatInputModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    MatMenuModule,
    ContentShowModule,
    MatListModule,
    HttpClientModule,
    MatBadgeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
