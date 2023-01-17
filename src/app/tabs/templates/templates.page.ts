import { Component } from '@angular/core';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { FormService } from 'src/app/services/form.service';

@Component({
  selector: 'app-templates',
  templateUrl: 'templates.page.html',
  styleUrls: ['templates.page.scss']
})
export class TemplatesPage {
  templateTypes: any[] = [{ code: 'text', description: 'Testo' }, { code: 'boolean', description: 'Booleano' }];
  selectedType: any;
  selectedKey: String = '';

  constructor(public formService: FormService) {
    this.formFields = this.formService.getFormFieldConfig();
  }


  formModel: unknown = {};
  formFields: FormlyFieldConfig[];

  editMode: boolean = false;
  
  editModeToggle(): void {
    this.editMode = !this.editMode;
  }

  addTemplate(): void {
    //launch template plugin
    console.log('adding template', this.selectedType, this.selectedKey)
    if(this.selectedType && this.selectedKey.length > 0) {
      
      var tmp_obj:any = this._buildFormObject(this.selectedKey, this.selectedType.code, {}, undefined);
      this.formFields.push(tmp_obj)
      console.log('added-obj', this.formFields)
    }
  }

  saveForm(): void {
    this.formService.setFormFieldConfig(this.formFields);
    this.editMode = !this.editMode;
  }

  handleChangeType(event: any): void {
    this.selectedType = event.target.value;
  }

  private _buildFormObject(key: String, type: String, props: any, template: any) {
    //TODO: add groups
    if(template)
      return { key: key, type: type, props: props, template: template};
    else
      return { key: key, type: type, props: props};
  }
}
