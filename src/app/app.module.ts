import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { DetailsComponent } from './pages/details/details.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { CarrosselComponent } from './components/carrossel/carrossel.component';
import { CardComponent } from './components/card/card.component';
import { CardPopularComponent } from './components/card-popular/card-popular.component';
import { CardCartazComponent } from './components/card-cartaz/card-cartaz.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DetailsComponent,
    NavBarComponent,
    CarrosselComponent,
    CardComponent,
    CardPopularComponent,
    CardCartazComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
