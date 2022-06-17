import { Component, OnInit, Input } from '@angular/core';
import { BlockchainService } from 'src/app/services/blockchain.service';

@Component({
  selector: 'app-block-view',
  templateUrl: './block-view.component.html',
  styleUrls: ['./block-view.component.scss']
})
export class BlockViewComponent implements OnInit {

  @Input() public block: any;

  @Input() public selectedBlock: any;

  private blocks: any = [];

  constructor(private blockchainService: BlockchainService) {
    this.blocks = this.blockchainService.getBlocks();
  }

  ngOnInit(): void {
  }

  isSelectedBlock() {
    return this.block === this.selectedBlock;
  }

  getBlockNumber() {
    return this.blocks.indexOf(this.block) + 1;
  }

}
