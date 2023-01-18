import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ImportPage } from './importer.page';

import { ImportPageRoutingModule } from './importer-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ImportPageRoutingModule
  ],
  declarations: [ImportPage]
})
export class ImportPageModule {}
