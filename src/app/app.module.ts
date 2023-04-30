import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { MainComponent } from './components/main/main.component';
import { Router } from '@angular/router';
import { ArtComponent } from './components/art/art.component';
import { OtherInterestsComponent } from './components/other-interests/other-interests.component';
import { ScienceComponent } from './components/science/science.component';
import { HealthComponent } from './components/health/health.component';
import { TravelComponent } from './components/travel/travel.component';
import { WritingComponent } from './components/writing/writing.component';
import { ReadingListComponent } from './components/reading-list/reading-list.component';
import { MusicComponent } from './components/music/music.component';
import { SoftwareComponent } from './components/software/software.component';
//import { CarouselComponent } from './components/carousel/carousel.component';
//import { MatCarouselModule } from '@ngmodule/material-carousel';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    MainComponent,
    ArtComponent,
    OtherInterestsComponent,
    ScienceComponent,
    HealthComponent,
    TravelComponent,
    WritingComponent,
    ReadingListComponent,
    MusicComponent,
    SoftwareComponent,
    //CarouselComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    
  ],
  providers: [],
  bootstrap: [AppComponent ]
})
export class AppModule { }
