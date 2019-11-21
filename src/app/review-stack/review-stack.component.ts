import { Component, OnInit } from '@angular/core';
import { Tool,SavedToolchainService } from '../services/saved-toolchain.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-review-stack',
  templateUrl: './review-stack.component.html',
  styleUrls: ['./review-stack.component.css']
})
export class ReviewStackComponent implements OnInit {
  stack : Tool[]= [];
  constructor(private savedToolChainService: SavedToolchainService, private router: Router) { }
  

  ngOnInit() {
    this.stack= this.savedToolChainService.getStack();
    console.log(this.stack);

  }
  build(){
    
    this.router.navigate(['../build']);

  }

}
 