import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';

@Component({
  selector: 'app-form-container',
  templateUrl: './form-container.component.html',
  styleUrls: ['./form-container.component.scss'],
})
export class FormContainerComponent implements OnInit {
  @Input() name?: string;
  constructor() { }

  ngOnInit() {}

  form = new FormGroup({});
  model:any = {};
  fields: FormlyFieldConfig[] = [
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

  onSubmit(model: any) {
    console.log(model);
    alert(JSON.stringify(this.model));
  }

}
