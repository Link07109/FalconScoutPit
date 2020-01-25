import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import {CommonModule} from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatchCardComponent } from './match-card.component';

@NgModule({
    declarations: [MatchCardComponent],
    imports: [IonicModule, CommonModule, FormsModule],
    exports: [MatchCardComponent]
})
export class MatchCardModule {}
