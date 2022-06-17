import { Component, Input, OnInit } from '@angular/core';
import { BlockchainService } from 'src/app/services/blockchain.service';

@Component({
  selector: 'app-transactions-table',
  templateUrl: './transactions-table.component.html',
  styleUrls: ['./transactions-table.component.scss']
})
export class TransactionsTableComponent implements OnInit {

  @Input()
  public transactions: any[];

  constructor(private blockchainService: BlockchainService) {
    this.transactions = [];
   }

  ngOnInit(): void {
  }

  isCurrentUserAddress(address: any) {
    return this.blockchainService.isCurrentUserAddress(address);
  }

}
