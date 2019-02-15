import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-nav-item',
  templateUrl: './nav-item.component.html',
  styleUrls: ['./nav-item.component.scss']
})
export class NavItemComponent implements OnInit {

  @Input()
  private item:any;

  constructor() { }

  ngOnInit() {
  }

}
