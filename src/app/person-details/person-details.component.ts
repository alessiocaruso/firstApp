import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { people, Person } from '../../people';
import { PeopleComponent } from '../people/people.component';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
@Component({
  selector: 'app-person-details',
  templateUrl: './person-details.component.html',
  styleUrls: ['./person-details.component.css']
})
export class PersonDetailsComponent implements OnInit {
  person: Person | undefined;
  fontSizePx = 16;
  textBox: string='Inserisci un testo';
  number=false;
  numberPhone(){
    this.number=true;
  }
  canc(){
  this.textBox='';
  }
constructor(
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    const routeParams = this.route.snapshot.paramMap;
    const personIdFromRoute = Number(routeParams.get('personId'));
      // Find the product that correspond with the id provided in route.
      this.person = people.find(person => person.id === personIdFromRoute);
  }
  onCustomEvent2(event: string) {
     this.textBox=event;
  }
  public generateRandomKey() {
    this.textBox = Math.random().toString(36).slice(-8);
  }
  onCustomEvent(event: string) {
    window.alert(event);
    console.log(event);
  }
}