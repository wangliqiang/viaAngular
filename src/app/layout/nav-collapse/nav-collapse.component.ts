import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-nav-collapse',
  templateUrl: './nav-collapse.component.html',
  styleUrls: ['./nav-collapse.component.scss']
})
export class NavCollapseComponent implements OnInit {

  @Input()
  item:any;

  constructor() { }

  ngOnInit() {
  }

}
