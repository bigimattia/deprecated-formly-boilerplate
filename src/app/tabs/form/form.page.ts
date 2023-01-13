import { Component } from '@angular/core';
import { FormlyFieldConfig } from '@ngx-formly/core';

@Component({
  selector: 'app-form',
  templateUrl: 'form.page.html',
  styleUrls: ['form.page.scss']
})
export class FormPage {
  formModel: unknown = {};
  formFields: FormlyFieldConfig[] = [
    {
      key: 'email',
      type: 'input',
      props: {
        label: 'Email address',
        placeholder: 'Enter email',
        required: true,
      }
    },
    {
      fieldGroupClassName: 'row',
      fieldGroup: [
        {
          className: 'col-6',
          type: 'input',
          key: 'firstName',
          props: {
            label: 'First Name',
          },
        },
        {
          className: 'col-6',
          type: 'input',
          key: 'lastName',
          props: {
            label: 'Last Name',
          },
          expressions: {
            'props.disabled': '!model.firstName',
          },
        },
      ],
    },
    {
      className: 'section-label',
      template: '<hr /><div><strong>Address:</strong></div>',
    },
    {
      fieldGroupClassName: 'row',
      fieldGroup: [
        {
          className: 'col-6',
          type: 'input',
          key: 'street',
          props: {
            label: 'Street',
          },
        },
        {
          className: 'col-3',
          type: 'input',
          key: 'cityName',
          props: {
            label: 'City',
          },
        },
        {
          className: 'col-3',
          type: 'input',
          key: 'zip',
          props: {
            type: 'number',
            label: 'Zip',
            max: 99999,
            min: 0,
            pattern: '\\d{5}',
          },
        },
      ],
    },
    { template: '<hr />' },
    {
      type: 'textarea',
      key: 'otherInput',
      props: {
        label: 'Other Input',
      },
    },
    {
      type: 'checkbox',
      key: 'otherToo',
      props: {
        label: 'Other Checkbox',
      },
    }
  ];
  getFormEvent(data:any) {
    console.log('event triggered data:', data)
  }
  constructor() {}

}
