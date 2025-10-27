import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Serie } from '../serie';
import { SerieService } from '../serie-service';

@Component({
  selector: 'app-serie-listar',
  templateUrl: './serie-listar.html',
  styleUrls: ['./serie-listar.css'],
  standalone: true,
  imports: [CommonModule],
})
export class SerieListar implements OnInit {
  series: Array<Serie> = [];
  selectedSerie?: Serie;
  averageSeasons: number = 0;

  constructor(private serieService: SerieService) {}

  getSeries(): void {
    this.serieService.getSeries().subscribe((series) => {
      this.series = series;
      this.calculateAverageSeasons();
    });
  }
    calculateAverageSeasons(): void {
    if (this.series.length > 0) {
      const total = this.series.reduce((sum, serie) => sum + serie.seasons, 0);
      this.averageSeasons = total / this.series.length;
    } else {
      this.averageSeasons = 0;
    }
  }

  onSelect(serie: Serie): void {
    this.selectedSerie = serie;
    console.log('Seleccionada:', serie.name, serie.poster);
  }

  ngOnInit() {
    this.getSeries();
  }
}
