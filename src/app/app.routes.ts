import { Routes } from '@angular/router';
import {LogInComponent} from "./public/components/log-in/log-in.component";
import {SignUpComponent} from "./public/components/sign-up/sign-up.component";
import {HomeComponent} from "./bodega-track/components/home/home.component";

export const routes: Routes = [
  {path: 'log-in', component: LogInComponent},
  {path: 'sign-up', component: SignUpComponent},
  {path: 'home', component: HomeComponent},
  {path: '', pathMatch: 'full', redirectTo: 'home'},
  {path: '**', pathMatch: 'full', redirectTo: 'home'},
];
