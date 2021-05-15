import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { ThanipaniComponent } from './thanipani/thanipani.component';

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
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
