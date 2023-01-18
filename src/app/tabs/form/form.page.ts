import { Component } from '@angular/core';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { FormService } from 'src/app/services/form.service';

@Component({
  selector: 'app-form',
  templateUrl: 'form.page.html',
  styleUrls: ['form.page.scss']
})
export class FormPage {
  formModel: unknown = {};
  formFields: FormlyFieldConfig[];

  getFormEvent(data:any) {
    console.log('event triggered data:', data)
  }
  constructor(formSrv: FormService) {
    this.formFields = formSrv.getFormFieldConfig();
    console.log('loaded data:',  this.formFields)
  }

}
