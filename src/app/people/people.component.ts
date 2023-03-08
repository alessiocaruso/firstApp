import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { people } from '../../people';
import { Router } from '@angular/router';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent implements OnInit {
  people = [...people];

  constructor(private route: Router) {
    // ...
  }
  ngOnInit() {
  }
  navigateToWorks() {
    this.route.navigate(['/works'])
  }
}