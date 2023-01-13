import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FormContainerComponent } from './form-container.component';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyBootstrapModule } from '@ngx-formly/bootstrap';

@NgModule({
  imports: [ CommonModule, FormsModule, IonicModule, ReactiveFormsModule, FormlyModule.forRoot(), FormlyBootstrapModule],
  declarations: [FormContainerComponent],
  exports: [FormContainerComponent]
})
export class FormContainerModule {}
