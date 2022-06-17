import { Component, OnInit } from '@angular/core';
import { BlockchainService } from 'src/app/services/blockchain.service';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { Transaction } from 'src/blockchain/blockchain';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-transaction',
  templateUrl: './create-transaction.component.html',
  styleUrls: ['./create-transaction.component.scss']
})
export class CreateTransactionComponent implements OnInit {

  public newTx: any;
  public walletKey: any;
  public currentBalance: any;

  constructor(private blockchainService: BlockchainService, private toastr: ToastrService, private router: Router) {
    this.walletKey = this.blockchainService.walletKeys[0];
    this.currentBalance = this.blockchainService.blockchainInstance.getBalanceOfAddress(this.walletKey.publicKey);
  }

  ngOnInit(): void {
    this.newTx = new Transaction();
  }

  createTransaction() {
    this.newTx.fromAddress = this.walletKey.publicKey;
    this.newTx.signTransaction(this.walletKey.keyObj);

    try {
      this.blockchainService.addTransaction(this.newTx);
    } 
    catch (e: any) {
      this.toastr.error('', e, {timeOut: 2000});
      return;
    }

    this.toastr.success('', 'Transaction created successfully!', {timeOut: 2000});
    this.router.navigate(['/new/transaction/pending']);
    this.newTx = new Transaction();
  }

}
