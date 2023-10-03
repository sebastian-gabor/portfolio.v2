import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  public isVisited = false;
  public showMenu = 'none';
  public showText = '0';
  public opacity = '0';

  public checkVisited() {
    // reverse the value of property
    this.isVisited = !this.isVisited;

    if (this.isVisited === true) {
      this.showMenu = 'block';
    } else {
      this.showMenu = 'none';
    }
  }
  hideMenu() {
    this.isVisited = false;
    this.showMenu = 'none';
  }

  showEmojiText() {
    this.showText = '5rem';
    this.opacity = '100%';
    setTimeout(() => {
      this.showText = '0';
      this.opacity = '0';
    }, 2000);
  }
}
