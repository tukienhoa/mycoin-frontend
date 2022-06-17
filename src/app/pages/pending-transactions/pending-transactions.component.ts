import { Component, OnInit } from '@angular/core';
import { BlockchainService } from 'src/app/services/blockchain.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pending-transactions',
  templateUrl: './pending-transactions.component.html',
  styleUrls: ['./pending-transactions.component.scss']
})
export class PendingTransactionsComponent implements OnInit {
  
  public pendingTransactions: any = [];

  constructor(private blockchainService: BlockchainService, private toastr: ToastrService, private router: Router) {
    this.pendingTransactions = blockchainService.getPendingTransactions();
  }

  ngOnInit(): void {
  }

  minePendingTransactions() {
    this.blockchainService.minePendingTransactions();
    this.toastr.success('', 'Block mined!', {timeOut: 2000});
    this.router.navigate(['/']);
  }
}
