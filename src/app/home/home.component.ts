import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  @Input() idade: number = 22
  @Output() meuEvento = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  changeName() {
    this.meuEvento.emit('Eu sou o filho');
  }

}
