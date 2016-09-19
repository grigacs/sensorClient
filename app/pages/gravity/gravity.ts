import { Component,NgZone } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the GravityPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/

var socket:SocketIOClient.Socket;

@Component({
  templateUrl: 'build/pages/gravity/gravity.html',
})
export class GravityPage {

  static get parameters() {
    return [NgZone];
  }


  gravX = null;
  gravY = null;
  gravZ = null;
  timestamp = Date.now();

  constructor(private navCtrl: NavController, public _ngZone:NgZone) {

    socket = io('http://192.168.0.21:3000');
    window.addEventListener('devicemotion', function (eventData) {
      this.gravX = eventData.accelerationIncludingGravity.x;
      this.gravY = eventData.accelerationIncludingGravity.y;
      this.gravZ = eventData.accelerationIncludingGravity.z;
      document.getElementById("gravityX").innerHTML = 'axis X: ' + this.gravX;
      document.getElementById("gravityY").innerHTML = 'axis Y: ' + this.gravY;
      document.getElementById("gravityZ").innerHTML = 'axis Z: ' + this.gravZ;
      this.zone = _ngZone;

       socket.emit('message', {
       deviceSensor: 'Gravity',
       X: this.gravX,
       Y: this.gravY,
       Z: this.gravZ,
       now: Date.now()
       });
    });

  }

}
