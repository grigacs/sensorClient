import { Component, NgZone } from '@angular/core';
import { NavController } from 'ionic-angular';
import * as io from "socket.io-client";

/*
  Generated class for the OrientationPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/

var socket:SocketIOClient.Socket;

@Component({
  templateUrl: 'build/pages/orientation/orientation.html',
})
export class OrientationPage {

  static get parameters() {
    return [NgZone];
  }

  oriX = null;
  oriY = null;
  oriZ = null;

  constructor(public navCtrl:NavController, public _ngZone:NgZone) {


    socket = io('http://192.168.0.21:3000');

    window.addEventListener('deviceorientation', function (eventData) {
      this.oriX = eventData.gamma;
      this.oriY = eventData.beta;
      this.oriZ = eventData.alpha;
      document.getElementById("orientationX").innerHTML = 'axis X: ' + this.oriX;
      document.getElementById("orientationY").innerHTML = 'axis Y: ' + this.oriY;
      document.getElementById("orientationZ").innerHTML = 'axis Z: ' + this.oriZ;
      this.zone = _ngZone;


       socket.emit('message', {
          deviceSensor: 'Orientation',
          X: this.oriX,
          Y: this.oriY,
          Z: this.oriZ,
          now: Date.now()
       });
    });
  }
}
