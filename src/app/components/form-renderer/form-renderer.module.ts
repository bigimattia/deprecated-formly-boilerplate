import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FormRendererComponent } from './form-renderer.component';

import { FormlyModule } from '@ngx-formly/core';
import { FormlyIonicModule } from '@ngx-formly/ionic';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    FormlyModule.forRoot({ extras: { lazyRender: true } }),
    FormlyIonicModule,
  ],
  declarations: [FormRendererComponent],
  exports: [FormRendererComponent],
})
export class FormRendererModule {}