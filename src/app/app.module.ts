import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatRadioModule} from '@angular/material/radio';
import {MatDividerModule} from '@angular/material/divider';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatButtonModule} from '@angular/material/button';
import {MatSliderModule} from '@angular/material/slider';
import {MatIconModule} from '@angular/material/icon';
import {MatGridListModule} from '@angular/material/grid-list';

import { ListedGuitarsComponent } from './components/listed-guitars/listed-guitars.component';
import { DetailedGuitarComponent } from './components/detailed-guitar/detailed-guitar.component';
import { OrderedGuitarComponent } from './components/ordered-guitar/ordered-guitar.component';
import { AddOrEditGuitarComponent } from './components/add-or-edit-guitar/add-or-edit-guitar.component';

@NgModule({
  declarations: [
    AppComponent,
    ListedGuitarsComponent,
    DetailedGuitarComponent,
    OrderedGuitarComponent,
    AddOrEditGuitarComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatInputModule,
    MatSelectModule,
    MatRadioModule,
    MatDividerModule,
    MatProgressBarModule,
    MatButtonToggleModule,
    MatButtonModule,
    MatSliderModule,
    MatIconModule,
    MatGridListModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
