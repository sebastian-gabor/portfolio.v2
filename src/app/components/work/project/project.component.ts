import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss'],
})
export class ProjectComponent {
  @Input() projectData: any;
  state = 'inactive';

  showDescription(e: Event) {
    e.preventDefault();
    if (this.state === 'inactive') {
      this.state = 'active';
    } else {
      this.state = 'inactive';
    }
  }
}
