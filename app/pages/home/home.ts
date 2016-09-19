import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import { AccelerationPage } from '../acceleration/acceleration';
import { OrientationPage } from '../orientation/orientation';
import { GravityPage } from '../gravity/gravity';


var devices = 0;
@Component({
  templateUrl: 'build/pages/home/home.html'
})
export class HomePage {

  constructor(private navCtrl: NavController) {
  }

  accelerationPage = AccelerationPage;
  orientationPage = OrientationPage;
  gravityPage = GravityPage;
}



