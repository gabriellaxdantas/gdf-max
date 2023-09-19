import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { DetailsComponent } from './pages/details/details.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { CarrosselComponent } from './components/carrossel/carrossel.component';
import { CardComponent } from './components/card/card.component';
import { CardPopularComponent } from './components/card-popular/card-popular.component';
import { CardCartazComponent } from './components/card-cartaz/card-cartaz.component';
import { CardPopularShowsComponent } from './components/card-popular-shows/card-popular-shows.component';
import { FooterComponent } from './components/footer/footer.component';
import { CardRankedShowsComponent } from './components/card-ranked-shows/card-ranked-shows.component';
import { SearchedComponent } from './pages/searched/searched.component';
import { FilmesSeriesComponent } from './pages/filmes-series/filmes-series.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DetailsComponent,
    NavBarComponent,
    CarrosselComponent,
    CardComponent,
    CardPopularComponent,
    CardCartazComponent,
    CardPopularShowsComponent,
    FooterComponent,
    CardRankedShowsComponent,
    SearchedComponent,
    FilmesSeriesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    RouterModule,
    DatePipe,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
