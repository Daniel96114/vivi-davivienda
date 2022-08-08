import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { OptionList } from 'src/app/components/option-list/option-list.component';
import { VoiceCommandComponent } from 'src/app/components/voice-command/voice-command.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  title = 'Tranferencias y avances';

  list: OptionList[] = [
    {
      title: 'Entre mis productos Davivienda',
      id: 1,
    },
    {
      title: 'A otras cuentas Davivienda',
      id: 2,
    },
    {
      title: 'A Daviplata',
      id: 3,
    },
    {
      title: 'A cuentas otros bancos',
      id: 4,
    },
    {
      title: 'Desde y hacia mis bolsillos',
      id: 5,
    },
    {
      title: 'Giros internacionales',
      id: 6,
    },
    {
      title: 'Avances',
      id: 7,
    },
    {
      title: 'Transferencia a Daviplata por comando de voz',
      id: 8,
    },
  ];

  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {}

  showModal(option: OptionList) {
    if (option.id === 8) {
      this.dialog.open(VoiceCommandComponent, {
        data: {
          option: option,
        },
      });
    }
  }
}
