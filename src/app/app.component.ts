import {Component, OnInit} from '@angular/core';
import {AppareilServices} from './services/appareil.services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  isAuth = false;

  lastUpdate = new Promise(
    (resolve, reject) => {
    const date = new Date();
    setTimeout(
      () => {
        resolve(date);
      }, 2000
    );
  });

  appareils: any[];

  constructor(private appareilServices: AppareilServices) {
    setTimeout(
      () => {
        this.isAuth = true;
      }, 4000
    );
  }

  ngOnInit() {
    this.appareils = this.appareilServices.appareils;
  }

  onAllumer() {
  this.appareilServices.switchOnAll();
  }

  onEteindre() {
    this.appareilServices.switchOffAll();

  }




}


