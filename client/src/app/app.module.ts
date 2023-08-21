import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Components/header/header.component';
import { FooterComponent } from './Components/footer/footer.component';
import { HomeComponent } from './Components/home/home.component';
import { AboutComponent } from './Components/about/about.component';
import { ContentComponent } from './Components/content/content.component';
import { ServisComponent } from './Components/servis/servis.component';
import { CallComponent } from './Components/call/call.component';
import { NotFoundComponent } from './Components/not-found/not-found.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import {FormsModule} from '@angular/forms';
import { Router } from '@angular/router';

// angular material import 
import {MatMenuModule, matMenuAnimations} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule, matFormFieldAnimations} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSelectModule} from '@angular/material/select';
import {MatTabsModule} from '@angular/material/tabs';

import { FormBuilder } from '@angular/forms';
import {MatGridListModule} from '@angular/material/grid-list';
import { ProductComponent } from './Components/product/product.component';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { AdminComponent } from './Components/admin/admin.component';
import { SignUpUserComponent } from './Components/sign-up-user/sign-up-user.component';
import { RegisterAdminComponent } from './Components/register-admin/register-admin.component';
import { LoginComponent } from './Components/login/login.component';
import { ContactWithUsComponent } from './Components/contact-with-us/contact-with-us.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    ContentComponent,
    ServisComponent,
    CallComponent,
    NotFoundComponent,
    ProductComponent,
    AdminComponent,
    SignUpUserComponent,
    RegisterAdminComponent,
    LoginComponent,
    ContactWithUsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatToolbarModule,
    MatSelectModule,
    FormsModule,
    MatTabsModule,
    MatGridListModule,
    MatProgressBarModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
