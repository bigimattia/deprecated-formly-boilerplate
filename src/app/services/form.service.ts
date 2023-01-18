import { Injectable } from '@angular/core';
import { FormlyField, FormlyFieldConfig } from '@ngx-formly/core';

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

  public addFormFieldConfig(value: FormlyFieldConfig): void {
    this.formFieldConfig.push(value);
  }

  public removeFormFieldConfig(value: FormlyFieldConfig): void {
    var index: number = this.formFieldConfig.indexOf(value, 0);
    this.formFieldConfig.splice(index, 1);
  }
}
