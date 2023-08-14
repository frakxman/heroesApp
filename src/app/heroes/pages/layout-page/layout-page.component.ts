import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from 'src/app/auth/services/auth.service';

import { User } from 'src/app/auth/interfaces/users.interface';

@Component({
  selector: 'app-layout-page',
  templateUrl: './layout-page.component.html',
  styles: [
  ]
})
export class LayoutPageComponent {

  public sidebarItems = [
    { label: 'List', icon: 'label', url: './list' },
    { label: 'Add', icon: 'add', url: './new-hero' },
    { label: 'Search', icon: 'search', url: './search' },
    { label: 'Logout', icon: 'logout', url: '/auth/login' },
  ]

  constructor( private authService: AuthService, private router: Router ) {}

  get user(): User | undefined {
    return this.authService.currentUser;
  }

  onLogout(): void {
    this.authService.logout();
    this.router.navigate(['/auth/login']);
  }
}
