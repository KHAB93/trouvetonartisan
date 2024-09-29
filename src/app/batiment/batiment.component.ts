

import { Component, OnInit } from '@angular/core';
import { ArtisanService } from './artisan.service';

@Component({
  selector: 'app-batiment',
  templateUrl: './batiment.component.html',
  styleUrls: ['./batiment.component.css']
  
})
  

export class BatimentComponent implements OnInit {
  artisans!: any[];
  filteredArtisans!: any[];
  title= ""
  

  constructor(private artisanService: ArtisanService) { }

  ngOnInit(): void {
    this.artisans = this.artisanService.getArtisans();
    this.filteredArtisans = this.artisans.filter(artisan => artisan.category === 'Bâtiment');
    console.log(this.filteredArtisans);
  }
  }