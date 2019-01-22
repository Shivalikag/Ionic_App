import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController, App } from 'ionic-angular';
import {MenuPage} from '../menu/menu';
import { compareDates } from 'ionic-angular/umd/util/datetime-util';
/**
 * Generated class for the SignupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
  
})
export class SignupPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
 
  }
  navigateToMenuPage()
  {
    this.navCtrl.push(MenuPage);
  }
  heart_rate=""
  o_level=""
  temp=""
  fun1() {
   this.heart_rate='1'
 }
 fun2() {
  this.o_level='2'
}
fun3() {
  this.temp='3'
}
  fun4(): void {
  this.navCtrl.push(MenuPage);
}
  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupPage');
  }
}

export class BasicPage {
  constructor(app: App, menu: MenuController) {
    menu.enable(true);

  }
}