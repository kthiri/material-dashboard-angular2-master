import { Component, OnInit } from '@angular/core';

declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
  
    { path: '/dashboard', title: 'Dashboard',  icon: 'dashboard', class: '' },
    { path: '/user-profile', title: 'Driver Management',  icon:'person', class: '' },
    { path: '/table-list', title: 'Vehicule Management',  icon:'content_paste', class: '' },
    
    { path: '/typography', title: 'Driver behavior',  icon:'library_books', class: '' },
    { path: '/upgrade', title: 'Ecodriving',  icon:'unarchive', class: '' },
   // { path: '/icons', title: 'Creation contrat',  icon:'bubble_chart', class: '' },
    { path: '/maps', title: 'Maps',  icon:'location_on', class: '' },
    
     //{ path: '/notifications', title: 'Notifications',  icon:'notifications', class: 'active-pro' },
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor() { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
      if ($(window).width() > 991) {
          return false;
      }
      return true;
  };
}
