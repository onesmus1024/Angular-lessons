import { Component } from '@angular/core';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.css']
})
export class MainContentComponent {

  title = 'Main Content'; //string interpolation
  imageUrl = 'https://www.w3schools.com/w3css/img_lights.jpg'; //property binding
  imageDescription = 'A picture of a light'; //property binding
  buttonDisabled = true; //property binding

  constructor() {
    setTimeout(() => {
      this.buttonDisabled = false;
    }, 2000);
  }

  share(event: Event){
    console.log(event);
  }

}
