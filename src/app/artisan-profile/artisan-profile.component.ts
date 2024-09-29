import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ArtisanService } from './artisan.service';
import { Router } from '@angular/router';

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
  selector: 'app-artisan-profile',
  templateUrl: './artisan-profile.component.html',
  styleUrls: ['./artisan-profile.component.css']
})
export class ArtisanProfileComponent implements OnInit {
  artisan?: Artisan;

  constructor(private route: ActivatedRoute, private artisanService: ArtisanService,private router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const id = params['id'];
      if (id) { 
        this.artisanService.getArtisan(id).subscribe((artisan: Artisan) => {
          console.log(artisan);
          if (artisan) {
            this.artisan = artisan;
          } else {
            console.error(`Artisan not found with id ${id}`);
            
          }
        });
      } else {
        console.error('Id not found in route parameters');
      }
    });
  }
  openContactForm() {
    
    this.router.navigate(['/contact-form']);
  }
}

