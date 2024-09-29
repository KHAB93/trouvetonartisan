import { Component, OnInit } from '@angular/core';
import { ArtisanService } from './artisan.service';

@Component({
  selector: 'app-alimentation',
  templateUrl: './alimentation.component.html',
  styleUrls: ['./alimentation.component.css']
})
  
export class AlimentationComponent implements OnInit {
  artisans!: any[];
  filteredArtisans!: any[];
  title= ""
  

  constructor(private artisanService: ArtisanService) { }

  ngOnInit(): void {
    this.artisans = this.artisanService.getArtisans();
    this.filteredArtisans = this.artisans.filter(artisan => artisan.category === 'Alimentation');
    console.log(this.filteredArtisans);
  }
  }
