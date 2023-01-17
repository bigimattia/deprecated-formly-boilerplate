import { Component } from '@angular/core';
import { FormService } from './services/form.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(private formService: FormService) {  this.formService = new FormService(); }
}
