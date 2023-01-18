import { Component, Input, OnInit, Output } from '@angular/core';
import { faComputer } from '@fortawesome/free-solid-svg-icons';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { FormService } from 'src/app/services/form.service';
import { TemplatesPage } from 'src/app/tabs/templates/templates.page';

@Component({
  selector: 'app-template-container',
  templateUrl: './template-container.component.html',
  styleUrls: ['./template-container.component.scss'],
})
export class TemplateContainerComponent{
  @Input() name?: string;
  @Input() templateData: any;

  templateTypes: any[] = [{ code: 'text', description: 'Testo' }, { code: 'boolean', description: 'Booleano' }, { code: 'input', description: 'Input'}, 
  { code: 'textarea', description: 'Area di testo'}, { code: 'select', description: 'Selezione'}, { code: 'checkbox', description: 'Casella spuntabile'},
  { code: 'datepicker', description: 'Selettore data'}];

  constructor() {
    
  }

  getFormEvent(data:any) {
    console.log('event triggered data:', data)
  }
}
