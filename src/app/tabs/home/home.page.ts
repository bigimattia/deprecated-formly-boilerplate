import { Component } from '@angular/core';
import { FormService } from 'src/app/services/form.service';
import { StorageService } from 'src/app/services/storage/storage.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage {

  constructor(storage: StorageService, formSrv: FormService) {
    var tmp_data = storage.getData('formly_boilerplate_storage_data');
    if(tmp_data) formSrv.setFormFieldConfig(tmp_data);
    console.log('loaded data-----', tmp_data)
  }
}
