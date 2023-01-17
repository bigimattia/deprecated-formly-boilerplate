import { Component, Input } from '@angular/core';
import { faComputer } from '@fortawesome/free-solid-svg-icons';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { FormService } from 'src/app/services/form.service';
import { TemplatesPage } from 'src/app/tabs/templates/templates.page';

@Component({
  selector: 'app-template-container',
  templateUrl: './template-container.component.html',
  styleUrls: ['./template-container.component.scss'],
})
export class TemplateContainerComponent {
  @Input() name?: string;
  @Input() formFieldsTemplateList: FormlyFieldConfig[] = [];
  @Input() formModel: unknown;
  @Input() enableEdit: boolean = false;

  constructor() {}

  getFormEvent(data:any) {
    console.log('event triggered data:', data)
  }
}
