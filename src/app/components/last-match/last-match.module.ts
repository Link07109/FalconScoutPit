import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import {CommonModule} from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LastMatchComponent } from './last-match.component';

@NgModule({
    declarations: [LastMatchComponent],
    imports: [IonicModule, CommonModule, FormsModule],
    exports: [LastMatchComponent]
})
export class LastMatchModule {}
