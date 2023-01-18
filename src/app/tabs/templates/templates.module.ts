import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TemplatesPage } from './templates.page';

import { TemplatesPageRoutingModule } from './templates-routing.module';
import { TemplateContainerComponentModule } from 'src/app/components/template-container/template-container.module';
import { FormRendererModule } from 'src/app/components/form-renderer/form-renderer.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    TemplatesPageRoutingModule,
    TemplateContainerComponentModule,
    FormRendererModule
  ],
  declarations: [TemplatesPage]
})
export class TemplatesPageModule {}
