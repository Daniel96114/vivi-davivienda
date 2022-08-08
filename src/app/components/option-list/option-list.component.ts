import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

export interface OptionList {
  title: string;
  id: number
}

@Component({
  selector: 'app-option-list',
  templateUrl: './option-list.component.html',
  styleUrls: ['./option-list.component.scss']
})
export class OptionListComponent implements OnInit {

  @Input() option!: OptionList;
  @Output() selectOption = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onClick(){
    this.selectOption.emit(this.option)
  }

}
