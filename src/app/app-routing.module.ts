import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { DetailsComponent } from './pages/details/details.component';
import { CommonModule, DatePipe } from '@angular/common';
import { SearchedComponent } from './pages/searched/searched.component';
import { FilmesSeriesComponent } from './pages/filmes-series/filmes-series.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'details/:mediaType/:id', component: DetailsComponent },
  { path: 'searched', component: SearchedComponent },
  { path: 'searched/:category', component: SearchedComponent},
  { path: 'filmes-series', component: FilmesSeriesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [DatePipe]
})
export class AppRoutingModule { }
