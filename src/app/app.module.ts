import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule, FormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card'
import { MatButtonModule } from '@angular/material/button'
import { MatInputModule } from '@angular/material/input'
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import {CommonService} from './Service/CommonService';
import { HttpClientModule} from '@angular/common/http';
import { ThanipaniComponent } from './thanipani/thanipani.component';
import { StationLoginComponent } from './station-login/station-login.component';
import { MatTooltipModule } from '@angular/material/tooltip';
import { TheevibathuComponent } from './theevibathu/theevibathu.component';
import { NgxUiLoaderModule } from "ngx-ui-loader";
import { PreviewComponent } from './preview/preview.component';
import { SfoLoginComponent } from './sfo-login/sfo-login.component';
import { DfoLoginComponent } from './dfo-login/dfo-login.component';
import { AddMembersFormComponent } from './add-members-form/add-members-form.component';
import { ProfilePageComponent } from './profile-page/profile-page.component';
import { FireCallFeedingComponent } from './fire-call-feeding/fire-call-feeding.component';



@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    LoginComponent,
    ThanipaniComponent,
    StationLoginComponent,
    TheevibathuComponent,
    PreviewComponent,
    SfoLoginComponent,
    DfoLoginComponent,
    AddMembersFormComponent,
    ProfilePageComponent,
    FireCallFeedingComponent,
   
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    ReactiveFormsModule,
    FormsModule,
    MatTooltipModule,
    HttpClientModule,
    NgxUiLoaderModule,
  ],
  providers: [CommonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
