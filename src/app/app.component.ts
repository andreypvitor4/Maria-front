import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  name = 'maria-front 33';
  number = 33;

  constructor() {
    console.log('AppComponent constructor');
  }

  changeName() {
    this.name = 'maria 2';
  }

  ReceberEvento(event: string) {
    this.name = event;
  }



}
