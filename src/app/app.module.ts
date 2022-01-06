import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatRadioModule} from '@angular/material/radio';
import {MatDividerModule} from '@angular/material/divider';

import { ListedGuitarsComponent } from './components/listed-guitars/listed-guitars.component';
import { DetailedGuitarComponent } from './components/detailed-guitar/detailed-guitar.component';
import { OrderedGuitarComponent } from './components/ordered-guitar/ordered-guitar.component';

@NgModule({
  declarations: [
    AppComponent,
    ListedGuitarsComponent,
    DetailedGuitarComponent,
    OrderedGuitarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatInputModule,
    MatSelectModule,
    MatRadioModule,
    MatDividerModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
