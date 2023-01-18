import { Component } from '@angular/core';
import { FormService } from 'src/app/services/form.service';

@Component({
  selector: 'app-import',
  templateUrl: 'importer.page.html',
  styleUrls: ['importer.page.scss']
})
export class ImportPage {
  files: File[] = [];
  json_list: any[] = [];

  constructor() { }

  onFileChange(fileChangeEvent: any) {
    this.files = fileChangeEvent.target.files;
  }

  async import() {
    if(this.files) {
      for(var f_idx = 0; f_idx < this.files.length ; f_idx++) {
        console.log(this.files[f_idx])
        var json_file = JSON.parse(await this.files[f_idx].text());

    
    console.log('changed file.....', this.files, json_file)
      }
    }
  }
}
