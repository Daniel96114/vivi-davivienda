import { Component, Input, OnInit } from '@angular/core';

export interface ReceiverList {
  name: string;
  tel: string;
  id: number
}

@Component({
  selector: 'app-list-receiver',
  templateUrl: './list-receiver.component.html',
  styleUrls: ['./list-receiver.component.scss']
})
export class ListReceiverComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() option!: ReceiverList;

}
