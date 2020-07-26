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
import {FormsService} from "./forms.service"

import { AboutUsComponent } from './about-us/about-us.component';
import { WhatWeDoComponent } from './what-we-do/what-we-do.component';
import { WhereWeWorkComponent } from './where-we-work/where-we-work.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ChurchprogramsComponent } from './churchprograms/churchprograms.component';
import { SundayServiceComponent } from './sunday-service/sunday-service.component';
import { MidWeekServiceComponent } from './mid-week-service/mid-week-service.component';
import { WomenSundayComponent } from './women-sunday/women-sunday.component';
import { SundaySchoolComponent } from './sunday-school/sunday-school.component';
import { YouthMinistryComponent } from './youth-ministry/youth-ministry.component';
import { EvangelisimComponent } from './evangelisim/evangelisim.component';


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
    GalleryComponent,
    ChurchprogramsComponent,
    SundayServiceComponent,
    MidWeekServiceComponent,
    WomenSundayComponent,
    SundaySchoolComponent,
    YouthMinistryComponent,
    EvangelisimComponent
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
        {path:"churchprograms", component:ChurchprogramsComponent},
        {path:"sundayservice", component:SundayServiceComponent},
        {path:"midweekservice", component:MidWeekServiceComponent},
        {path:"sundayschool", component:SundaySchoolComponent},
        {path:"womensunday", component:WomenSundayComponent},
        {path:"youthministry", component:YouthMinistryComponent},
        {path:"evangelisim", component:EvangelisimComponent},
        
      ]
      )
  ],
  providers: [LernServiceService, ChurchplantService, FormsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
