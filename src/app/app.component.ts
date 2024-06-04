import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Subscription, filter } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'cardify';
  isLogin: boolean = true;
  private routerEventsSubscription?: Subscription;

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
    this.routerEventsSubscription = this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(event => {
      if (event instanceof NavigationEnd) {
        if (event.url === '/login') {
          this.isLogin = true;
        }
        else {
          this.isLogin = false;
        }
      }
    });
  }

  ngOnDestroy() {
    if (this.routerEventsSubscription) {
      this.routerEventsSubscription.unsubscribe();
    }
  }

}
