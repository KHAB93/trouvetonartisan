
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ArtisanService } from './artisan.service';

export interface Artisan {
  id: string;
  name: string;
  specialty: string;
  note: string;
  location: string;
  about: string;
  email: string;
  website: string;
  category: string;
  top: boolean;
}

@Component({
  selector: 'app-artisan-model',
  templateUrl: './artisan.model.component.html',
  styleUrls: ['./artisan.model.component.css']
})
export class ArtisanModelComponent implements Artisan, OnInit {
  id: string = ''; 
  name: string = ''; 
  specialty: string = ''; 
  note: string = ''; 
  location: string = ''; 
  about: string = ''; 
  email: string = ''; 
  website: string = ''; 
  category: string = ''; 
  top: boolean = false; 

  constructor(private route: ActivatedRoute, private artisanService: ArtisanService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const id = params['id'];
      this.artisanService.getArtisan(id).subscribe((artisan: Artisan) => {
        console.log(artisan);
        if (artisan) {
          this.id = artisan.id;
          this.name = artisan.name;
          this.specialty = artisan.specialty;
          this.note = artisan.note;
          this.location = artisan.location;
          this.about = artisan.about;
          this.email = artisan.email;
          this.website = artisan.website;
          this.category = artisan.category;
          this.top = artisan.top;
        } else {
          console.error(`Artisan not found with id ${id}`);
          // You could also redirect to a 404 page or display an error message
        }
      });
    });
  }
}