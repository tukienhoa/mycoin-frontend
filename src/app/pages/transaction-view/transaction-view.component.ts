import { Component, OnInit } from '@angular/core';
import { BlockchainService } from 'src/app/services/blockchain.service';

@Component({
  selector: 'app-transaction-view',
  templateUrl: './transaction-view.component.html',
  styleUrls: ['./transaction-view.component.scss']
})
export class TransactionViewComponent implements OnInit {

  public transactions: any = [];

  constructor(private blockchainService: BlockchainService) { 
    this.transactions = blockchainService.blockchainInstance.getAllTransactions();
  }

  ngOnInit(): void {
  }

}
