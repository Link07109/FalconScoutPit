import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import {CommonModule} from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RankingsComponent } from './rankings.component';

@NgModule({
    declarations: [RankingsComponent],
    imports: [IonicModule, CommonModule, FormsModule],
    exports: [RankingsComponent]
})
export class RankingsModule {}
