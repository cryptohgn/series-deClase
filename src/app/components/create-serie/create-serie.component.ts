import { Component, inject } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Serie } from 'src/app/interfaces/serie.type=interface';
import { SeriesService } from 'src/app/series.service';
@Component({
  selector: 'app-create-serie',
  templateUrl: './create-serie.component.html',
  styleUrls: ['./create-serie.component.css']
})
export class CreateSerieComponent {

  formSerie: FormGroup;
  
  serieService = inject(SeriesService)

  newSerie: Serie | undefined;

  constructor() {
    this.formSerie = new FormGroup({
      title: new FormControl(),
      creator: new FormControl(),
      rating: new FormControl(),
      dates: new FormControl(),
      image: new FormControl(),
      channel: new FormControl(),
      id: new FormControl(),
    })

    }

    onSubmit(){
      //this.newSerie = this.formSerie.value;
      const serieAdded = this.serieService.createNew(this.formSerie.value)
      console.log(serieAdded)
  }

}
