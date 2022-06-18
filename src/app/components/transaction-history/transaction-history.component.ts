import { Component, Input, OnInit } from '@angular/core';
import { BlockchainService } from 'src/app/services/blockchain.service';

@Component({
  selector: 'app-transaction-history',
  templateUrl: './transaction-history.component.html',
  styleUrls: ['./transaction-history.component.scss']
})
export class TransactionHistoryComponent implements OnInit {

  @Input()
  public transactions: any[];

  constructor(private blockchainService: BlockchainService) {
    this.transactions = [];
   }

  ngOnInit(): void {
  }

  getBlockNumberOfTransaction(transaction: any) {
    return this.blockchainService.blockchainInstance.getBlockNumberOfTransaction(transaction);
  }
}
