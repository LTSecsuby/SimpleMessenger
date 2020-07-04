import {NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import {ContentWrapperComponent} from './components/content-wrapper/content-wrapper.component';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatListModule} from '@angular/material/list';
import {ContentDisplayComponent} from './components/content-display/content-display.component';
import {ContentUserComponent} from './components/content-user/content-user.component';
import {InputUserPanelComponent} from './components/input-user-panel/input-user-panel.component';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {FormsModule} from '@angular/forms';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

@NgModule({
  declarations: [ContentWrapperComponent,
    ContentDisplayComponent,
    ContentUserComponent,
    InputUserPanelComponent],
  exports: [
    ContentWrapperComponent,
    ContentDisplayComponent,
    ContentUserComponent,
    InputUserPanelComponent
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
