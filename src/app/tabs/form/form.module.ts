import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FormPage } from './form.page';

import { FormPageRoutingModule } from './form-routing.module';
import { FormContainerModule } from 'src/app/components/form-container/form-container.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    FormContainerModule,
    FormPageRoutingModule
  ],
  declarations: [FormPage]
})
export class FormPageModule {}
