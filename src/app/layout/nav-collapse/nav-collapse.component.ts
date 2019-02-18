import { Component, OnInit, Input, HostBinding } from '@angular/core';
import { viaAnimations } from '../animations';


@Component({
  selector: 'app-nav-collapse',
  templateUrl: './nav-collapse.component.html',
  styleUrls: ['./nav-collapse.component.scss'],
  animations:viaAnimations
})
export class NavCollapseComponent implements OnInit {

  @Input()
  item: any;

  @HostBinding('class')
  classes = 'nav-collapsable nav-item';

  @HostBinding('class.open')
  isCollapsed = false;

  constructor() { }

  ngOnInit() {
  }

  toggleCollapse(event): void {
    event.preventDefault();
    this.isCollapsed = !this.isCollapsed;
  }

}
