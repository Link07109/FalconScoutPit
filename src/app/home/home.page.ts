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

  rankingsObservable;
  rankings = [];

  currentEvent = '2020ncpem';
  homeTeam = 'frc1533';

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

  constructor(
    private blueAllianceService: BlueAllianceService,
  ) { }

  ionViewWillEnter() {
    this.refresh();
    setInterval(() => this.refresh(), 300000);
  }

  refresh() {
    this.pitObservable = this.blueAllianceService.getApiStuff2();
    this.pitTeamMatches = [];

    this.rankingsObservable = this.blueAllianceService.getEventRankings(this.currentEvent);
    this.rankings = [];

    this.currentMatch = null;

    this.rankingsObservable.subscribe(element => {
      element.rankings.forEach(el => {
        this.rankings.push(el);
      });
    });

    this.pitObservable.subscribe(element => {
      this.homeTeam = element.home_team;
      this.currentEvent = element.event.name;
      this.currentMatch = element.current_match;
      if (!this.currentMatch) { this.currentMatch = {
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
      }
      console.log(this.currentMatch);

      element.team_matches.forEach(el => {
        this.pitTeamMatches.push(el);
      });
      this.pitTeamMatches = this.pitTeamMatches.sort((a, b) => a.predicted_time - b.predicted_time);

    });

  }

}
