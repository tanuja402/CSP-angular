import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import {MatToolbarModule} from'@angular/material/toolbar';
import {MatButtonModule}  from'@angular/material/button';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import {MatIconModule} from '@angular/material/icon';

import { LoginComponent } from './login/login.component';
import { AboutComponent } from './about/about.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RegisterComponent } from './register/register.component';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { InsertComponent } from './insert/insert.component';
import { DeleteComponent } from './delete/delete.component';
import { UpdateComponent } from './update/update.component';
import { ReadComponent } from './read/read.component';
import { DetailsComponent } from './details/details.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatDialogModule } from '@angular/material/dialog';
import { ContactusComponent } from './contactus/contactus.component';
import { NECComponent } from './nec/nec.component';
import { NavbarComponent } from './navbar/navbar.component';
import { Page1Component } from './page1/page1.component';
import { Page2Component } from './page2/page2.component';
/*import {MatButtonModule} from '@angular/material/button';*/
import {MatCardModule} from '@angular/material/card';
import {MatProgressBarModule} from '@angular/material/progress-bar';

import {MatDividerModule} from '@angular/material/divider';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
  
    LoginComponent,
    AboutComponent,
    RegisterComponent,
 
    InsertComponent,
    DeleteComponent,
    UpdateComponent,
    ReadComponent,
    DetailsComponent,
    ContactusComponent,
    NECComponent,
    NavbarComponent,
    Page1Component,
    Page2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    FormsModule,
    HttpClientModule,
    NgbModule,
    MatDialogModule,
    MatIconModule,
    ReactiveFormsModule,
    MatCardModule,
    MatProgressBarModule,
    MatDividerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
