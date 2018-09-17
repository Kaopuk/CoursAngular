import { Component, OnInit } from '@angular/core';
import {AppareilServices} from '../services/appareil.services';

@Component({
  selector: 'app-appareil-view',
  templateUrl: './appareil-view.component.html',
  styleUrls: ['./appareil-view.component.scss']
})
export class AppareilViewComponent implements OnInit {

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
