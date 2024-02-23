import { Component, inject } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Serie } from 'src/app/interfaces/serie.type=interface';
import { SeriesService } from 'src/app/series.service';
@Component({
  selector: 'app-create-serie',
  templateUrl: './create-serie.component.html',
  styleUrls: ['./create-serie.component.css']
})
export class CreateSerieComponent {

  formSerie: FormGroup;
  selectedChannel = new FormControl('');
  
  serieService = inject(SeriesService)

  newSerie: Serie | undefined;

  constructor() {
    this.formSerie = new FormGroup({
      title: new FormControl(null, [Validators.required, Validators.minLength(2)]),
      creator: new FormControl(null, [Validators.required, Validators.minLength(2)]),
      rating: new FormControl(null, [Validators.required, Validators.min(1), Validators.max(9)]),
      dates: new FormControl(null, [Validators.required,Validators.min(1965), Validators.max(2024)]),
      image: new FormControl(),
      channel: new FormControl(null, [Validators.required])
    })

    }

    ngOnInit(): void {
    }
  
    checkError(field: string, validator: string): boolean | undefined {
      return this.formSerie.get(field)?.hasError(validator) && this.formSerie.get(field)?.touched;
    }

    onSubmit(){
      
      if (this.formSerie.valid) {
        const newSerie = this.formSerie.value;
        console.log(newSerie)
        // this.serieService.createNew(newSerie);
        
        // this.formSerie.reset();
        
      }
      
  }

}
