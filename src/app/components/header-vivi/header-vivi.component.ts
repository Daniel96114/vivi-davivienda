import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-vivi',
  templateUrl: './header-vivi.component.html',
  styleUrls: ['./header-vivi.component.scss']
})
export class HeaderViviComponent implements OnInit {

  @Input() title ='';
  constructor() { }

  ngOnInit(): void {
  }

}
