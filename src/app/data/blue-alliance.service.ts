import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BlueAllianceService {

  baseUrl = 'https://www.thebluealliance.com/api/v3';
  corsApiUrl = 'https://cors-anywhere.herokuapp.com/';
  X_TBA_AUTH_KEY = 'LuZ6vmMGf9rDpZfXvo67urtAeNODH4rHU2a2mJ5HoGApBxA1tNOmEr4vBccYjmDJ';

  constructor(private http: HttpClient) { }

  doCORSRequest(options, printResult) {
    const x = new XMLHttpRequest();
    x.open(options.method, this.corsApiUrl + options.url);
    x.onload = x.onerror = () => {
      printResult(
        options.method + ' ' + options.url + '\n' +
        x.status + ' ' + x.statusText + '\n\n' +
        (x.responseText || '')
      );
    };
    if (/^POST/i.test(options.method)) {
      x.setRequestHeader('Content-Type', 'application/json'); x.send(options.data) ;
    } // x-www-form-urlencoded
  }

  getApiStuff2() {
    return this.http.get('https://falconscout.azurewebsites.net/api/pit');
  }

  getApiStuff() {
    this.doCORSRequest({
      method: 'GET',
      url: 'http://falconscout.azurewebsites.net/api/pit',
    }, (data) => {
      console.log(data);
    });

  }

  getTeamMatches(teamKey: string, eventKey: string) {
    return this.http.get(`${this.baseUrl}/team/${teamKey}/event/${eventKey}/matches/simple?X-TBA-Auth-Key=${this.X_TBA_AUTH_KEY}`);
  }

  getMatch(matchKey: string) {
    return this.http.get(`${this.baseUrl}/match/${matchKey}?X-TBA-Auth-Key=${this.X_TBA_AUTH_KEY}`);
  }

}
