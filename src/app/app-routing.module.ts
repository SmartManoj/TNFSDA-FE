import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddMembersFormComponent } from './add-members-form/add-members-form.component';
import { AppComponent } from './app.component';
import { DfoLoginComponent } from './dfo-login/dfo-login.component';
import { FireCallFeedingComponent } from './fire-call-feeding/fire-call-feeding.component';
import { LoginComponent } from './login/login.component';
import { PreviewComponent } from './preview/preview.component';
import { ProfilePageComponent } from './profile-page/profile-page.component';
import { RegistrationComponent } from './registration/registration.component';
import { SfoLoginComponent } from './sfo-login/sfo-login.component';
import { StationLoginComponent } from './station-login/station-login.component';
import { ThanipaniComponent } from './thanipani/thanipani.component';
import { TheevibathuComponent } from './theevibathu/theevibathu.component';

const routes: Routes = [
  {
    path:'',
    component: AppComponent,
    children: [
      {
        path:'',
        component: RegistrationComponent,
         pathMatch: 'full'
      },
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: 'thanipani',
        component: ThanipaniComponent
      },
      {
        path: 'theevibathu',
        component: TheevibathuComponent
      },
       {
        path: 'stationlogin',
        component: StationLoginComponent
      },
      {
        path: 'Preview',
        component: PreviewComponent
      },
      {
        path: 'AddMembers',
        component: AddMembersFormComponent
      },
      {
        path: 'dfo_login',
        component: DfoLoginComponent
      },
      {
        path: 'profile',
        component: ProfilePageComponent
      },
      {
        path: 'sfo_login',
        component: SfoLoginComponent
      },
      {
        path: 'feeding',
        component: FireCallFeedingComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
