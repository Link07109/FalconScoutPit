import { Component, Input } from '@angular/core';

@Component({
  selector: 'match-card',
  templateUrl: './match-card.component.html',
  styleUrls: ['./match-card.component.scss'],
})
export class MatchCardComponent {

  constructor() { }

  @Input()
  homeTeam: string;

  @Input()
  match: {
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
