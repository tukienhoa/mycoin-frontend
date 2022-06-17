import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlockchainViewerComponent } from './pages/blockchain-viewer/blockchain-viewer.component';
import { CreateTransactionComponent } from './pages/create-transaction/create-transaction.component';
import { PendingTransactionsComponent } from './pages/pending-transactions/pending-transactions.component';
import { WalletComponent } from './pages/wallet/wallet.component';

const routes: Routes = [
  { path: '', component: BlockchainViewerComponent},
  { path: 'new/transaction', component: CreateTransactionComponent},
  { path: 'new/transaction/pending', component: PendingTransactionsComponent},
  { path: 'wallet/:address', component: WalletComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
