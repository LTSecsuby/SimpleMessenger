import {NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import {ContentWrapperComponent} from './components/content-wrapper/content-wrapper.component';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatListModule} from '@angular/material/list';
import {ContentDisplayComponent} from './components/content-display/content-display.component';
import {ContentUserComponent} from './components/content-user/content-user.component';

@NgModule({
  declarations: [ContentWrapperComponent,
    ContentDisplayComponent,
    ContentUserComponent],
  exports: [
    ContentWrapperComponent,
    ContentDisplayComponent,
    ContentUserComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatFormFieldModule,
    MatListModule
  ]
})
export class ContentShowModule { }
