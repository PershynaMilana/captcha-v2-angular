import { NgModule } from '@angular/core';
import { RouterModule, Routes, ExtraOptions } from '@angular/router';
import { ApplicantRegisterComponent } from './components/auth/register/applicant-register/applicant-register.component';

import { HomeComponent } from './components/main/home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'main', component: HomeComponent },
  { path: 'register/applicant', component: ApplicantRegisterComponent },
];

const routerOptions: ExtraOptions = {
  onSameUrlNavigation: 'reload'
};

@NgModule({
  imports: [RouterModule.forRoot(routes, routerOptions)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
