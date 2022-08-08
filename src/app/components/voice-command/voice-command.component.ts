import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ProductsList } from '../list-products/list-products.component';
import { ReceiverList } from '../list-receiver/list-receiver.component';
import { OptionList } from '../option-list/option-list.component';
import { VoucherInfo } from '../transaction-resume/transaction-resume.component';

@Component({
  selector: 'app-voice-command',
  templateUrl: './voice-command.component.html',
  styleUrls: ['./voice-command.component.scss'],
})
export class VoiceCommandComponent implements OnInit {
  step: number = 1;

  constructor(public dialogRef: MatDialogRef<VoiceCommandComponent>, @Inject(MAT_DIALOG_DATA) public data: OptionList) {}

  list: ReceiverList[] = [
    {
      name: 'Mamá',
      id: 1,
      tel: '320 123 4567',
    },
    {
      name: 'Arriendo',
      id: 2,
      tel: '321 555 1234',
    },
    {
      name: 'Oficina',
      id: 3,
      tel: '321 555 1234',
    },
  ];

  productsList: ProductsList[] = [  
    {
      name: 'Cuenta de Ahorros',
      number: '1234 5678 7865 1234',
      amount: '$999.999.999,00',
      id: 1,
      info: 'Saldo disponible',
    },
    {
      name: 'Cuenta Corriente',
      number: '3456 7890 2233 4567',
      amount: '$999.999.999,00',
      id: 2,
      info: 'Saldo disponible',
    },
  ];

  listVoucher: VoucherInfo = 
	{
		voucherID: 304003,
		date: '10/12/2020',
		time: '$:00 p.m.',
		origin: {
			accountType: 'Cuenta de Ahorros',
			number: '6216 9618 9213 1234',
		},
		target: {
			name: 'Mamá',
			number: '310 222 9988',
		},
		value: '$100.00,00',
		cost: '$0'
	};

  ngOnInit(): void {}

  nextStep() {
    if(this.step === 7){
      this.dialogRef.close();
    }
    this.step++;
  }
}
