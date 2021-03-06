import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import {LoginPage} from '../login/login';
import {RegisterPage} from '../register/register';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }
  navigateToRegisterPage(): void {
    this.navCtrl.push(RegisterPage);
 }

 navigateToLoginPage(): void {
  this.navCtrl.push(LoginPage);
}


}
