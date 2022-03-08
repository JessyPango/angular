import { Component, OnInit } from '@angular/core';
import {MeteoService} from "./meteo.service";

;

@Component({
  selector: 'app-meteo',
  templateUrl: './meteo.component.html',
  styleUrls: ['./meteo.component.css']
})
export class MeteoComponent implements OnInit {

  ville="sfax";
  info: any;
  weather5: any = [];

  oneDayShow = false;
  fiveDayShow = false;

  constructor(private meteoserv: MeteoService) { }

  ngOnInit(): void { }

  chargerMeteoljour() {
    this.info = new Array();
    this.meteoserv.getMeteoljour(this.ville).subscribe(data => {
      this.affichage1(data);
    });
    this.togleFiveDay()
  }
  chargerMeteo5jour() {
    this.meteoserv.getMeteo5jours(this.ville).subscribe(data => this.affichage(data)),
      (err: any) => { console.log(err) }
    this.togleOneDay()

  }

  affichage(data: any) {
    this.weather5 = new Array();
    for (let i = 0; i < data.list.length; i = i + 1) {
      this.weather5.push(data.list[i])
    }
    console.log(this.weather5[0])
  }
  affichage1(data: any) {
    this.info = data;
    console.log(this.info);
  }

  togleOneDay() {
    this.oneDayShow = true;
    this.fiveDayShow = false;
  }
  togleFiveDay() {
    this.oneDayShow = false;
    this.fiveDayShow = true;
  }
}
