import { Component, OnInit } from '@angular/core';
import { ArtisanService } from './artisan.service';

@Component({
  selector: 'app-fabrication',
  templateUrl: './fabrication.component.html',
  styleUrls: ['./fabrication.component.css']
  
})
  

export class FabricationComponent implements OnInit {
  artisans!: any[];
  filteredArtisans!: any[];
  title= ""
  

  constructor(private artisanService: ArtisanService) { }

  ngOnInit(): void {
    this.artisans = this.artisanService.getArtisans();
    this.filteredArtisans = this.artisans.filter(artisan => artisan.category === 'Fabrication');
    console.log(this.filteredArtisans);
  }
  }
