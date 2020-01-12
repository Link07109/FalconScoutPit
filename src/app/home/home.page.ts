import { Component, OnInit } from '@angular/core';
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
    _id: '5e134c577dfa9527300bb286',
    actual_time: null,
    alliances: {
      blue: {
        dq_team_keys: [],
        surrogate_team_keys: [],
        team_keys: [
          'frc435',
          'frc2059',
          'frc2642'
        ]
      },
      red: {
        dq_team_keys: [],
        surrogate_team_keys: [],
        team_keys: [
          'frc3229',
          'frc3459',
          'frc4291'
        ]
      }
    },
    comp_level: 'qm',
    event_key: '2020ncwak',
    key: '2020ncwak_qm1',
    match_number: 1,
    post_result_time: null,
    predicted_time: 1,
    score_breakdown: null,
    set_number: 1,
    time: null,
    winning_alliance: ''
  };

  matchCollectionObservable;
  matchCollectionArray = [];

  constructor(
    private blueAllianceService: BlueAllianceService,
  ) { }

  ionViewWillEnter() {
    this.refresh();
    setInterval(() => this.refresh(), 5000);

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
      })
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
