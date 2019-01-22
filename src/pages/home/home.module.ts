import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HomePage } from './home';


import {RegisterPage} from '../register/register';
import {LoginPage} from '../login/login';

@NgModule({
  declarations: [
    HomePage,
    RegisterPage,
    LoginPage
    
  ],
  imports: [
    IonicPageModule.forChild(HomePage),
  ],
  entryComponents: [
    HomePage,
    RegisterPage,
    LoginPage
   
  ]
})
export class HomePageModule {}
