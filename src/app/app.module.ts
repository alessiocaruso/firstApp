import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from "@angular/router";

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { TopbarComponent } from './topbar/topbar.component';
import { PeopleComponent } from './people/people.component';
import { PersonDetailsComponent } from './person-details/person-details.component';
import { WorksComponent } from './works/works.component';
import { TeamlistComponent } from './teamlist/teamlist.component';
import { ContattiComponent } from './contatti/contatti.component';
import { HomeComponent } from './home/home.component';
import { PersonDetailOutputComponent } from './person-detail-output/person-detail-output.component';
import { FooterComponent } from './footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { RequestComponent } from './request/request.component';


@NgModule({
  imports:      [ BrowserModule, FormsModule,     HttpClientModule,
    RouterModule.forRoot([
      { path: 'home', component: HomeComponent },
      { path: 'request', component: RequestComponent },

      { path: 'works', component: WorksComponent },
      { path: 'team', component: PeopleComponent },
      { path: 'contatti', component: ContattiComponent },
      { path: 'outputPerson', component: PersonDetailOutputComponent },

      { path: 'people/:personId', component: PersonDetailsComponent }
      

    ])
   ],
  declarations: [ AppComponent, HomeComponent,TopbarComponent, TeamlistComponent, RequestComponent,
    WorksComponent, PeopleComponent,PersonDetailsComponent,ContattiComponent, FooterComponent,PersonDetailOutputComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
