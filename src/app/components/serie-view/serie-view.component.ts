import { SeriesService } from './../../series.service';
import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Serie } from 'src/app/interfaces/serie.type=interface';

@Component({
  selector: 'app-serie-view',
  templateUrl: './serie-view.component.html',
  styleUrls: ['./serie-view.component.css']
})
export class SerieViewComponent {

  serie: Serie | undefined;

  activatedRoute = inject(ActivatedRoute)
  seriesService = inject(SeriesService)


  ngOnInit(){
    this.activatedRoute.params.subscribe(params => {
    const serieId = Number((params['serieId']))
    this.serie = this.seriesService.getSerieById(serieId)
    
  })
  }

}
