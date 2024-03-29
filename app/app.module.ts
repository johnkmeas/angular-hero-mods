import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { HttpModule }    from '@angular/http';
import './rxjs-extensions';


// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular2-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';

import { AppComponent }        from './app.component';
import { HeroDetailComponent } from './hero-detail.component';
import { DashboardComponent } from './dashboard.component';
import { HeroesComponent }     from './heroes.component';
import { HeroSearchComponent }     from './hero-search.component';
import { HeroFormComponent }     from './hero-form.component';
import { LikeComponent } from './like.component';
import { VoterComponent } from './app.voter.component';
import { HeroService } from './hero.service';
import { routing } from './app.routing';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    routing
  ],
declarations: [
  AppComponent,
  DashboardComponent,
  HeroDetailComponent,
  HeroesComponent,
  HeroSearchComponent,
  HeroFormComponent,
  LikeComponent,
  VoterComponent
],
  providers: [
    HeroService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {
}