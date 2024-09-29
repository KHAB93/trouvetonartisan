import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './notfound/notfound.component';

import { HomeComponent } from './home/home.component';
import { BatimentComponent } from './batiment/batiment.component';
import { ServicesComponent } from './services/services.component';
import { FabricationComponent } from './fabrication/fabrication.component';
import { AlimentationComponent } from './alimentation/alimentation.component';
import { ArtisanService } from './home/artisan.service';
import { ArtisanProfileComponent } from './artisan-profile/artisan-profile.component';
import { ContactFormComponent } from './contact-form/contact-form.component';

const ongletsInexistants = ["Cookies", "Mentions légales", "données personnelles", "Accessibilité"];

const routes: Routes = [

  {path: "", component: HomeComponent },
  {path: '', component: ArtisanService},
  {path: "batiment", component: BatimentComponent},
  {path: "services", component: ServicesComponent},
  {path: "fabrication", component: FabricationComponent},
  {path: "alimentation", component: AlimentationComponent},
  {path: 'artisan/:id', component: ArtisanProfileComponent},
  {path: 'contact-form', component: ContactFormComponent},
  ...ongletsInexistants.map(onglet => ({ path: onglet, redirectTo: "/404", pathMatch: 'full' as const })),
  {path: "404", component: NotFoundComponent },
  {path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
