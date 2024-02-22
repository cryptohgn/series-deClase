import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { SerieCardComponent } from './components/serie-card/serie-card.component';
import { SerieViewComponent } from './components/serie-view/serie-view.component';
import { SerieListComponent } from './components/serie-list/serie-list.component';
import { CreateSerieComponent } from './components/create-serie/create-serie.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SerieCardComponent,
    SerieViewComponent,
    SerieListComponent,
    CreateSerieComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
