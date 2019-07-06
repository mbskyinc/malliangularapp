import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import { AppComponent } from './app.component';
import {MatToolbarModule, MatButtonModule, MatSidenavModule, MatListModule, MatMenuModule, MatFormFieldModule, MatInputModule, MatDialogModule, MatTableModule} from '@angular/material';
import {MatCardModule} from '@angular/material';
import {MatIconModule} from '@angular/material/icon';
import {FlexLayoutModule} from '@angular/flex-layout';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { CountingComponent } from './counting';
import { AdditionComponent } from './addition';
import { MultiplicationComponent } from './multiplication/multiplication.component';
import { SubtractionComponent } from './subtraction';
import { RegistrationComponentComponent } from './registration-component/registration-component.component';
import { LoginComponentComponent } from './login-component/login-component.component';
import { MyMaterialModule } from  './material.module';
import {FormsModule} from '@angular/forms';
import {DataService} from './data.service';

@NgModule({
  declarations: [
    AppComponent,
    CountingComponent,
    AdditionComponent,
    MultiplicationComponent,
    SubtractionComponent,
    RegistrationComponentComponent,
    LoginComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatCardModule,
    MatIconModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    MatButtonModule, 
    MatMenuModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule,
    MatTableModule,
    MatSidenavModule, 
    MatListModule,
    MyMaterialModule,
    FormsModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
