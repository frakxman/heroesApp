import { Component } from '@angular/core';

@Component({
  selector: 'app-layout-page',
  templateUrl: './layout-page.component.html',
  styles: [
  ]
})
export class LayoutPageComponent {

  public sidebarItems = [
    { label: 'List', icon: 'label', url: './list' },
    { label: 'Add', icon: 'add', url: './new' },
    { label: 'Search', icon: 'search', url: './search' },
    { label: 'Logout', icon: 'logout', url: '/auth/login' },

  ]
}
