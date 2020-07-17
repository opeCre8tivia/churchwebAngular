import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, NgModel} from '@angular/forms';
import {RouterModule} from "@angular/router";

import { AppComponent } from './app.component';
import { LearnComponent } from './learn/learn.component';
import { NavComponent } from './nav/nav.component';
import { SliderComponent } from './slider/slider.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ProgramsComponent } from './programs/programs.component';
import { ActivitiesComponent } from './activities/activities.component';
import { GetinvolvedComponent } from './getinvolved/getinvolved.component';
import { UpdatesComponent } from './updates/updates.component';
import { PrayerComponent } from './prayer/prayer.component';
import { FooterComponent } from './footer/footer.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { ChurchplantComponent } from './churchplant/churchplant.component';


import {LernServiceService} from "./lern-service.service";
import {ChurchplantService} from "./churchplant.service";
import { AboutUsComponent } from './about-us/about-us.component';
import { WhatWeDoComponent } from './what-we-do/what-we-do.component';
import { WhereWeWorkComponent } from './where-we-work/where-we-work.component';
import { GalleryComponent } from './gallery/gallery.component';


@NgModule({
  declarations: [
    AppComponent,
    LearnComponent,
    NavComponent,
    SliderComponent,
    ProgramsComponent,
    ActivitiesComponent,
    GetinvolvedComponent,
    UpdatesComponent,
    PrayerComponent,
    FooterComponent,
    ContactComponent,
    HomeComponent,
    ChurchplantComponent,
    AboutUsComponent,
    WhatWeDoComponent,
    WhereWeWorkComponent,
    GalleryComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgbModule,
    RouterModule.forRoot(
      [
        {path:"", component:HomeComponent},
        {path:"contact", component:ContactComponent},
        {path:"churchplant", component:ChurchplantComponent},
        {path:"about", component:AboutUsComponent},
        {path:"whatwedo", component:WhatWeDoComponent},
        {path:"wherewework", component:WhereWeWorkComponent},
        {path:"gallery", component:GalleryComponent}
        
      ]
      )
  ],
  providers: [LernServiceService, ChurchplantService],
  bootstrap: [AppComponent]
})
export class AppModule { }
