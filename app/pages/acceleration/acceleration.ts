import {Component, NgZone} from '@angular/core';
import {NavController} from 'ionic-angular';
import * as io from "socket.io-client";

/*
 Generated class for the AccelerationPage page.

 See http://ionicframework.com/docs/v2/components/#navigation for more info on
 Ionic pages and navigation.
 */

var socket:SocketIOClient.Socket;

@Component({
  templateUrl: 'build/pages/acceleration/acceleration.html',
})
export class AccelerationPage {

  static get parameters() {
    return [NgZone];
  }


  accX = null;
  accY = null;
  accZ = null;
  timestamp = Date.now();

  constructor(public navCtrl:NavController, public _ngZone:NgZone) {

    socket = io('http://192.168.0.21:3000');
    window.addEventListener('devicemotion', function (eventData) {
      this.accX = eventData.acceleration.x;
      this.accY = eventData.acceleration.y;
      this.accZ = eventData.acceleration.z;
      document.getElementById("accelerationX").innerHTML = 'axis X: ' + this.accX;
      document.getElementById("accelerationY").innerHTML = 'axis Y: ' + this.accY;
      document.getElementById("accelerationZ").innerHTML = 'axis Z: ' + this.accZ;
      this.zone = _ngZone;

      socket.emit('message', {
        deviceSensor: 'Acceleration',
        X: this.accX,
        Y: this.accY,
        Z: this.accZ,
        now: Date.now()
      });
    });

   /* setInterval(function () {

      var date = new Date();
      var second = date.getSeconds();
      socket.emit('message', second);
    },1000)*/
  }
}
