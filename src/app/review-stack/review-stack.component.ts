import { Component, OnInit } from '@angular/core';
import { Tool,SavedToolchainService } from '../services/saved-toolchain.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-review-stack',
  templateUrl: './review-stack.component.html',
  styleUrls: ['./review-stack.component.css']
})
export class ReviewStackComponent implements OnInit {
  stacks : Tool[]= [];
  constructor(private savedToolChainService: SavedToolchainService, private router: Router) { }
  isData = false;

  ngOnInit() {
    this.stacks= this.savedToolChainService.getStack();
    this.isData = this.stacks.length == 0? false : true;
    console.log(this.stacks);

  }
  build() {
    
    this.router.navigate(['../build']);

  }

}
 