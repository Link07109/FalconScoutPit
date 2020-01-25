import { Component } from '@angular/core';
import { BlueAllianceService } from '../data/blue-alliance.service';
import * as $ from 'jquery';

@Component({
  selector: 'app-dash',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage {

  pitObservable;
  pitTeamMatches = [];
  currentEvent;
  currentMatch = {
    alliances: {
      blue: {
        team_keys: [
          '',
          '',
          ''
        ]
      },
      red: {
        team_keys: [
          '',
          '',
          ''
        ]
      }
    },
    comp_level: '',
    match_number: 0,
  };

  matchCollectionObservable;
  matchCollectionArray = [];

  constructor(
    private blueAllianceService: BlueAllianceService,
  ) { }

  ionViewWillEnter() {
    this.refresh();
    setInterval(() => this.refresh(), 60000);
  }

  refresh() {
    this.pitObservable = this.blueAllianceService.getApiStuff2();
    this.currentMatch = null;
    this.pitTeamMatches = [];

    this.pitObservable.subscribe(element => {
      this.currentEvent = element.event.name;
      this.currentMatch = element.current_match;
      console.log(this.currentMatch);

      element.team_matches.forEach(el => {
        this.pitTeamMatches.push(el);
      });
    });

    this.matchCollectionObservable = this.blueAllianceService.getTeamMatches('frc5190', '2019nccmp');
    this.matchCollectionArray = [];

    this.matchCollectionObservable.subscribe(element => {
      element.forEach(el => {
        this.matchCollectionArray.push(el);
      });
      this.matchCollectionArray = this.matchCollectionArray.sort((a, b) => a.predicted_time - b.predicted_time);
    });
  }

}
