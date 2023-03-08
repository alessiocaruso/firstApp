import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contatti',
  templateUrl: './contatti.component.html',
  styleUrls: ['./contatti.component.css']
})
export class ContattiComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  onNotify() {
    window.alert('Hai inviato correttamente la email');
  }
}