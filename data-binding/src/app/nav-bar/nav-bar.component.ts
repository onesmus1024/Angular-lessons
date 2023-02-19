import { Component } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {

  profileImage = 'https://avatars.githubusercontent.com/u/92239184?v=4';
  online = false;
  userName = 'John Doe';
  constructor() {
    setTimeout(() => {
      this.online = true;
    }, 2000);
  }


}
