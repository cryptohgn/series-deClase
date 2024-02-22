import { Serie } from 'src/app/interfaces/serie.type=interface';
import { SeriesService } from './../../series.service';
import { Component, inject } from '@angular/core';

@Component({
  selector: 'app-serie-list',
  templateUrl: './serie-list.component.html',
  styleUrls: ['./serie-list.component.css']
})
export class SerieListComponent {


  seriesService = inject(SeriesService)
  series: Serie[] = [];

  ngOnInit(){
    this.series = this.seriesService.getAllSeries()
    console.log(this.series)
  }
  
}
