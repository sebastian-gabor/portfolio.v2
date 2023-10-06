import { Component } from '@angular/core';
import { Project } from '../project.model';

@Component({
  selector: 'app-cloud-projects',
  templateUrl: './cloud-projects.component.html',
  styleUrls: ['./cloud-projects.component.scss'],
})
export class CloudProjectsComponent {
  projectData = [
    new Project(
      'Static Website',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.  ',
      '../../../../assets/images/work.png',
      '#'
    ),
  ];
}
