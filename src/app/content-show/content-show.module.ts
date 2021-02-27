import {NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatListModule} from '@angular/material/list';
import {ContentUserComponent} from './components/content-user/content-user.component';
import {InputUserPanelComponent} from './components/input-user-panel/input-user-panel.component';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {FormsModule} from '@angular/forms';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {FetchFriendsComponent} from './components/content-wrapper/fetch-friends/fetch-friends.component';
import {UserContactsComponent} from './components/content-wrapper/user-contacts/user-contacts.component';
import {UserNotificationsComponent} from './components/content-wrapper/user-notifications/user-notifications.component';

@NgModule({
  declarations: [
    ContentUserComponent,
    InputUserPanelComponent,
    FetchFriendsComponent,
    UserContactsComponent,
    UserNotificationsComponent
  ],
  exports: [
    ContentUserComponent,
    InputUserPanelComponent,
    FetchFriendsComponent,
    UserContactsComponent,
    UserNotificationsComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatFormFieldModule,
    MatListModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    FormsModule,
    MatProgressSpinnerModule
  ]
})
export class ContentShowModule { }
