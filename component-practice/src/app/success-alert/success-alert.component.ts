import { Component } from '@angular/core';

@Component({
  selector: 'app-success-alert',
  templateUrl: './success-alert.component.html',
  styleUrls: ['./success-alert.component.css']
})
export class SuccessAlertComponent {


  title = 'Success Alert';

  cancel(div: HTMLDivElement){
    div.style.display = 'none';
  }
}
