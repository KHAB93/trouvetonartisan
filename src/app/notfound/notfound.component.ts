import { Component } from '@angular/core';

@Component({
  selector: 'app-not-found',
  template: `
    <div class="container">
      <h1>404 - Page not found</h1>
      <img src="pagenofound.png" alt="" class="pagenofound mb-20">
      <p>La page que vous recherchez n'existe pas.</p>
    </div>
  `,
  styles: [`
    .container {
      text-align: center;
    }

  `]
})
export class NotFoundComponent { }
