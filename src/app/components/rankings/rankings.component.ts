import {Component, Input} from '@angular/core';

@Component({
  selector: 'rankings',
  templateUrl: './rankings.component.html',
  styleUrls: ['./rankings.component.scss'],
})
export class RankingsComponent {

  constructor() { }

  @Input()
  homeTeam: string;

  @Input()
  rankings: [
    {
      'dq': 0,
      'extra_stats': [
        0
      ],
      'matches_played': 0,
      'qual_average': null,
      'rank': 0,
      'record': {
        'losses': 0,
        'ties': 0,
        'wins': 0
      },
      'sort_orders': [
        0,
        0,
        0,
        0,
        0,
        0
      ],
      'team_key': ''
    },
  ];

}
