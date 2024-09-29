import { Component, OnInit } from '@angular/core';
import { ArtisanService } from './artisan.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
  
})
  

export class HomeComponent implements OnInit {
  artisans!: any[];
  filteredArtisans!: any[];
  title= "Comment trouver mon artisan"
  

  constructor(private artisanService: ArtisanService) { }

  ngOnInit(): void {
    this.artisans = this.artisanService.getArtisans();
    this.filteredArtisans = this.artisans.filter(artisan => artisan.note >= 4.9);
    console.log(this.filteredArtisans);
  }
  }