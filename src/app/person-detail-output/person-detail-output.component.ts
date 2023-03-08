import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { Person } from '../../people';
import { PeopleComponent } from '../people/people.component';


@Component({
  selector: 'app-person-detail-output',
  templateUrl: './person-detail-output.component.html',
  styleUrls: ['./person-detail-output.component.css'],
})
export class PersonDetailOutputComponent implements OnInit {
  @Input() person: Person;
  @Output() customEvent = new EventEmitter<string>();
  
  @Input()  size!: number | string;
  @Output() sizeChange = new EventEmitter<number>();

  @Input()  text: string;
  @Output() textChange = new EventEmitter<string>();

  dec() { this.resize(-1); }
  inc() { this.resize(+1); }

  keyCorrect="";
key='';
  invioKey(){
    if(this.key==this.person.key){
      this.keyCorrect="true";
    }
    else{
      this.keyCorrect="false";
    }
  }
  
  resize(delta: number) {
    this.size = Math.min(40, Math.max(8, +this.size + delta));
    this.sizeChange.emit(this.size);
  }

  onClick() {
    this.textChange.emit(this.text);
  }


  onButtonClick() {
    this.customEvent.emit('Hai premuto il bottone "Contattalo"');
  }

  public generateRandomKey() {
    this.text = Math.random().toString(36).slice(-8);
  }
  constructor(public http: HttpClient) { }
  ngOnInit() {
    this.loadUsers()
  }
  
  loadUsers(): void{
     this.http.get('https://my-json-server.typicode.com/JSGund/XHR-Fetch-Request-JavaScript/posts').subscribe(res=>{
       console.log(res);
      })
  }
  
  loadTitles(title: string): void{
    this.http.get('https://my-json-server.typicode.com/JSGund/XHR-Fetch-Request-JavaScript/posts').subscribe(res=>{
      console.log(res);
     })
 }
}