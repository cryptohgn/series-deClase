import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SerieListComponent } from './components/serie-list/serie-list.component';
import { SerieViewComponent } from './components/serie-view/serie-view.component';
import { CreateSerieComponent } from './components/create-serie/create-serie.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'series'},
  {path: 'series', component: SerieListComponent},
  {path: 'series/:serieId', component: SerieViewComponent},
  {path: 'create-serie', component: CreateSerieComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

  
}
