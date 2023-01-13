import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FormPage } from './form.page';

import { FormPageRoutingModule } from './form-routing.module';
import { FormRendererModule } from 'src/app/components/form-renderer/form-renderer.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    FormPageRoutingModule,
    FormRendererModule
  ],
  declarations: [FormPage]
})
export class FormPageModule {}
