import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BlueAllianceService {

  baseUrl = 'https://www.thebluealliance.com/api/v3';
  // corsApiUrl = 'https://cors-anywhere.herokuapp.com/';
  X_TBA_AUTH_KEY = 'LuZ6vmMGf9rDpZfXvo67urtAeNODH4rHU2a2mJ5HoGApBxA1tNOmEr4vBccYjmDJ';

  constructor(private http: HttpClient) { }

  getApiStuff2() {
    return this.http.get('https://falconscout.azurewebsites.net/api/pit');
  }

  getTeamMatches(teamKey: string, eventKey: string) {
    return this.http.get(`${this.baseUrl}/team/${teamKey}/event/${eventKey}/matches/simple?X-TBA-Auth-Key=${this.X_TBA_AUTH_KEY}`);
  }

  getMatch(matchKey: string) {
    return this.http.get(`${this.baseUrl}/match/${matchKey}?X-TBA-Auth-Key=${this.X_TBA_AUTH_KEY}`);
  }

  getEventRankings(eventKey: string) {
    return this.http.get(`${this.baseUrl}/event/${eventKey}/rankings?X-TBA-Auth-Key=${this.X_TBA_AUTH_KEY}`);
  }

  getEventPredictions(eventKey: string) {
    return this.http.get(`${this.baseUrl}/event/${eventKey}/predictions?X-TBA-Auth-Key=${this.X_TBA_AUTH_KEY}`);
  }

}
