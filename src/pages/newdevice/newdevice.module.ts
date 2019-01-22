import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NewdevicePage } from './newdevice';

@NgModule({
  declarations: [
    NewdevicePage,
  ],
  imports: [
    IonicPageModule.forChild(NewdevicePage),
  ],
})
export class NewdevicePageModule {}
