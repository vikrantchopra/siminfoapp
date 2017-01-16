import { Component, OnInit } from '@angular/core';

import { MenuItem } from 'primeng/primeng';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  private items: MenuItem[];

  ngOnInit() {
    this.items = [
      /*{ label: 'Home', icon: 'fa-home', url: '/home' },
      { label: 'Scrum', icon: 'fa-repeat', routerLink: "['/scrum']" },
      { label: 'Kanban', icon: 'fa-dashboard', url: '/kanban' }*/

      { label: 'Home', icon: 'fa-home', routerLink: ['/home'] },
      { label: 'Scrum', icon: 'fa-repeat', routerLink: ['/scrum'] },
      { label: 'Kanban', icon: 'fa-dashboard', routerLink: ['/kanban'] },
      { label: 'Team Info', icon: 'fa-users', routerLink: ['/teams'] },
      { label: 'Agile Coach Info', icon: 'fa-user', routerLink: ['/coach'] },
      { label: 'Resources', icon: 'fa-book', routerLink: ['/resources'] }
    ];
  }
}
