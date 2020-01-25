import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import {CommonModule} from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SkeletonCardComponent } from './skeleton-card.component';

@NgModule({
    declarations: [SkeletonCardComponent],
    imports: [IonicModule, CommonModule, FormsModule],
    exports: [SkeletonCardComponent]
})
export class SkeletonCardComponentModule {}
