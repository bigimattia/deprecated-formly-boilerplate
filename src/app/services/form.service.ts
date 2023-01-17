import { Injectable } from '@angular/core';
import { FormlyFieldConfig } from '@ngx-formly/core';

@Injectable({
  providedIn: 'root'
})
export class FormService {
  private formFieldConfig: FormlyFieldConfig[];
  constructor() {
    this.formFieldConfig = [];
  }

  public getFormFieldConfig(): FormlyFieldConfig[] {
    return this.formFieldConfig;
  }

  public setFormFieldConfig(value: FormlyFieldConfig[]): void {
    this.formFieldConfig = value;
  }
}
