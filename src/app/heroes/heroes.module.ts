import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeroesRoutingModule } from './heroes-routing.module';
import { MaterialModule } from '../material/material.module';

import { HeroePageComponent } from './pages/heroe-page/heroe-page.component';
import { ListPageComponent } from './pages/list-page/list-page.component';
import { NewPageComponent } from './pages/new-page/new-page.component';
import { SearchPageComponent } from './pages/search-page/search-page.component';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { HeroCardComponent } from './components/hero-card/hero-card.component';


@NgModule({
  declarations: [
    HeroePageComponent,
    ListPageComponent,
    NewPageComponent,
    SearchPageComponent,
    LayoutPageComponent,
    HeroCardComponent
  ],
  imports: [
    CommonModule,
    HeroesRoutingModule,
    MaterialModule
  ]
})
export class HeroesModule { }
