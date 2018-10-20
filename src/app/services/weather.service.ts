import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { $ } from 'protractor';

@Injectable()

export class WeatherService {
  constructor(
    public _http: Http
  ) {}
  getCityWeatherByName () {
    return this._http.get('https://api.openweathermap.org/data/2.5/forecast?id=524901&APPID=0a8f5909dc8bdb4b17174a2aa5669660').toPromise();
  }

  // getCityWeatherByName(city: string, metric: 'metric' | 'imperial' = 'metric'): Subject<string> {
  //   const dataSub = new Subject<string>();
  //   this._http.get(
  //     `http://api.openweathermap.org/data/2.5/forecast?id=524901&APPID=6fa6a6754e15520eba6c996a29d15184`)
  //     .subscribe((data) => {
  //       dataSub.next(data['weather']);
  //     }, (err) => {
  //       console.log(err);
  //     });
  //   return dataSub;
  }
}
