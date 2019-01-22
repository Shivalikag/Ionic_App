import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { UserProfilePage } from '../user-profile/user-profile';
import { SettingPage } from '../setting/setting';
import { HelpPage } from '../help/help';
import { NewdevicePage } from '../newdevice/newdevice';

/**
 * Generated class for the MenuPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html',

})
export class MenuPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  fun1(){
    this.navCtrl.push(UserProfilePage);
  }
  fun2(){
    this.navCtrl.push(SettingPage);
  }
  fun3(){
    this.navCtrl.push(HelpPage);
  }
  fun4(){
    this.navCtrl.push(HomePage);
  }
  fun5(){
    this.navCtrl.push(NewdevicePage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MenuPage');
  }

}
