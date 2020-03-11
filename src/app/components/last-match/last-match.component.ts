import {Component, Input} from '@angular/core';

@Component({
  selector: 'last-match',
  templateUrl: './last-match.component.html',
  styleUrls: ['./last-match.component.scss'],
})
export class LastMatchComponent {

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
