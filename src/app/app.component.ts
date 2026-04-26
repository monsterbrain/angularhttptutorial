import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  currentUrl: string = '';
  title = 'angular16httptutorial';

  constructor(private router: Router) {
    router.events
      .pipe(filter(e => e instanceof NavigationEnd))
      .subscribe(
        (event: any) => {
          if (event instanceof NavigationEnd) {
            this.currentUrl = event.url;
            console.log(this.currentUrl);
          }
        });
  }
}
