import { NgModule } from '@angular/core';
import { ServerModule } from '@angular/platform-server';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module'; 

import { AppComponent } from './app.component';

@NgModule({
  imports: [
    ServerModule,
    RouterModule,
    AppRoutingModule 
  ],
  bootstrap: [AppComponent],
})
export class AppServerModule {}
