import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'angular-beginner-to-advanced';
  pressed: boolean = false;

  onButtonClick() {
    if (this.pressed === true) {
      this.pressed = false;
    } else {
      this.pressed = true;
    }
    console.log(this.pressed);
  }
}
