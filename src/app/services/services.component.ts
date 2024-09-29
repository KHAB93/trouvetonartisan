

import { Component, OnInit } from '@angular/core';
import { ArtisanService } from './artisan.service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
  
})
  

export class ServicesComponent implements OnInit {
  artisans!: any[];
  filteredArtisans!: any[];
  title= "Services"
  

  constructor(private artisanService: ArtisanService) { }

  ngOnInit(): void {
    this.artisans = this.artisanService.getArtisans();
    this.filteredArtisans = this.artisans.filter(artisan => artisan.category === 'Services');
    console.log(this.filteredArtisans);
  }
  }