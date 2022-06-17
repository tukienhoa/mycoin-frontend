import { Component } from '@angular/core';
import { BlockchainService } from './services/blockchain.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'mycoin-frontend';
  public walletAddress = '';

  constructor(private blockchainService: BlockchainService) {
    this.walletAddress = blockchainService.walletKeys[0].publicKey;
  }
}
