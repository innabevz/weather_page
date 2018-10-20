import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {WeatherData} from './../models/weather.interface';
import {WeatherService} from './../services/weather.service';

@Component({
  selector: 'app-weather-search',
  templateUrl: './weather-search.component.html',
  styleUrls: ['./weather-search.component.css'],
  providers: [WeatherService]
})
export class WeatherSearchComponent implements OnInit {

  data: WeatherData[];

  constructor(
    private weatherService: WeatherService
  ) { }

  ngOnInit() {
    this.weatherService.getCityWeatherByName ()
    .then(res => {
      this.data = res.json();
    });
  }

}
