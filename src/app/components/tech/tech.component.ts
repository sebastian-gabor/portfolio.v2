import { Component } from '@angular/core';

@Component({
  selector: 'app-tech',
  templateUrl: './tech.component.html',
  styleUrls: ['./tech.component.scss'],
})
export class TechComponent {
  loadFeature = 'web';

  onNavigate(feature: string) {
    this.loadFeature = feature;
  }
}
