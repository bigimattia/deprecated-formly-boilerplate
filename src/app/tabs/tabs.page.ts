import { Component } from '@angular/core';
import { faHome, faFileImport, faContactBook, faFolder, faEdit } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {

  constructor() {}
  icon_home = faHome;
  icon_form = faFolder;
  icon_contact = faContactBook;
  icon_templates = faEdit;
  icon_import = faFileImport;
}
