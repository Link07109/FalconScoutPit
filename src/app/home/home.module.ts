import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { HomePage } from './home.page';
import { FalconToolbarModule } from '../components/falcon-toolbar/falcon-toolbar.module';
import {MatchCardModule} from '../components/match-card/match-card.module';
import {SkeletonCardComponentModule} from '../components/skeleton-card/skeleton-card-module';
import {RankingsModule} from '../components/rankings/rankings.module';
import {LastMatchModule} from '../components/last-match/last-match.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        FalconToolbarModule,
        MatchCardModule,
        SkeletonCardComponentModule,
        RankingsModule,
        LastMatchModule,
        RouterModule.forChild([
            {
                path: '',
                component: HomePage
            }
        ]),
    ],
  declarations: [HomePage]
})
export class HomePageModule {}
