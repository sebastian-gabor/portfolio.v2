import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-web-cloud-option',
  templateUrl: './web-cloud-option.component.html',
  styleUrls: ['./web-cloud-option.component.scss'],
})
export class WebCloudOptionComponent {
  @Output() featureLoaded = new EventEmitter<string>();
  loadedFeature = 'web';
  buttonLeft: string = '0';

  onRender(feature: string) {
    this.featureLoaded.emit(feature);
    this.loadedFeature = feature;

    if (feature === 'web') {
      this.buttonLeft = '0';
    } else {
      this.buttonLeft = '6rem';
    }
  }
}
