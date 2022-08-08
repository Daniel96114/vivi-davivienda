import { Component, Input, OnInit } from '@angular/core';

export interface VoucherInfo {
	voucherID: number;
	date: string;
	time: string;
	origin: {
		accountType: string;
		number: string;
	};
	target: {
		name: string;
		number: string;
	}
	value: string;
	cost: string;
}

@Component({
  selector: 'app-transaction-resume',
  templateUrl: './transaction-resume.component.html',
  styleUrls: ['./transaction-resume.component.scss']
})
export class TransactionResumeComponent implements OnInit {

  @Input() infoVoucher!: VoucherInfo;
  @Input() isShowHeader!: boolean;

  constructor() { }

  ngOnInit(): void {
  }


}
