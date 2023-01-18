import { Component } from '@angular/core';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { FormService } from 'src/app/services/form.service';
import { StorageService } from 'src/app/services/storage/storage.service';

@Component({
  selector: 'app-templates',
  templateUrl: 'templates.page.html',
  styleUrls: ['templates.page.scss']
})
export class TemplatesPage {
  public formFieldsTemplate: FormlyFieldConfig;
  formFieldList: FormlyFieldConfig[];
  editMode: boolean = false;

  constructor(public formService: FormService, public storage: StorageService) {
    this.formFieldsTemplate = this._getDefaultTemplate();
    this.formFieldList = this.formService.getFormFieldConfig();
  }
  
  editModeToggle(): void {
    this.formFieldsTemplate = this._getDefaultTemplate();
    this.editMode = !this.editMode;
  }

  saveTemplate(): void {
    console.log('template: ', this.formFieldsTemplate)
    this.formService.addFormFieldConfig(this.formFieldsTemplate);
    this.storage.setData('formly_boilerplate_storage_data', this.formService.getFormFieldConfig());
    console.log('saved data......',  this.formService.getFormFieldConfig(), this.storage.getData('formly_boilerplate_storage_data'))
    this.editModeToggle();
  }

  _getDefaultTemplate():FormlyFieldConfig {
    return {key: '', type:'', template: '', props: { label: '', placeholder: '', required: false }};
  }

  getJSON(obj:any): String {
    if(!obj) return '';
    return JSON.stringify(obj);
  }
}
