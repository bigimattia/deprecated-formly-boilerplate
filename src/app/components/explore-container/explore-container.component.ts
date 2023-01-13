import { Component, Input } from '@angular/core';
import { faComputer } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-explore-container',
  templateUrl: './explore-container.component.html',
  styleUrls: ['./explore-container.component.scss'],
})
export class ExploreContainerComponent {

  @Input() name?: string;
  icon_faGithub = faComputer;
}
