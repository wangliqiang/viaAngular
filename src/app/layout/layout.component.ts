import { Component, OnInit, } from '@angular/core';

import { navigation } from './model/nav-data';
import { NavigationItem } from './model/NavigationItem';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})

export class LayoutComponent implements OnInit {

  private menuData: Array<NavigationItem>;

  constructor() {
  }

  ngOnInit() {
    this.menuData = navigation;
  }

  /**
   * 展开、关闭Sidenav
   * @param event 
   */
  toggleSidenav(event) {
    event.toggle();
  }


}
