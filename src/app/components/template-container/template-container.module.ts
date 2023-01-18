import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TemplateContainerComponent } from './template-container.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { FormService } from 'src/app/services/form.service';
import { FormRendererModule } from '../form-renderer/form-renderer.module';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  imports: [ CommonModule, FormsModule, IonicModule, FontAwesomeModule, FormRendererModule, FormsModule],
  declarations: [TemplateContainerComponent],
  exports: [TemplateContainerComponent]
})
export class TemplateContainerComponentModule {}
