import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import {CommonModule} from '@angular/common'
import { FormsModule } from '@angular/forms';
import { FalconToolbarComponent } from './falcon-toolbar.component';

@NgModule({
    declarations: [FalconToolbarComponent],
    imports: [IonicModule, CommonModule, FormsModule],
    exports: [FalconToolbarComponent]
})
export class FalconToolbarModule {}
