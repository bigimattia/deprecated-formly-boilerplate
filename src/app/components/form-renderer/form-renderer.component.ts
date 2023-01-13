import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';

@Component({
  selector: 'app-form-renderer',
  templateUrl: './form-renderer.component.html',
  styleUrls: ['./form-renderer.component.scss'],
})
export class FormRendererComponent {
  @Input() formFieldList: FormlyFieldConfig[] = [];
  @Input() formModel: unknown;

  @Output() formSubmit: EventEmitter<any> = new EventEmitter();

  customForm: FormGroup = new FormGroup({});

  submitForm(formToSubmit: FormGroup): void {
    const { value } = formToSubmit;
    this.formSubmit.emit(value);
  }
}
