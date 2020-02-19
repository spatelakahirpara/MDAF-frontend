import { Component, OnInit } from '@angular/core';
import { GetApiService, Tool } from '../services/get-api.service';
import { SavedToolchainService } from '../services/saved-toolchain.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-progress-stack',
  templateUrl: './progress-stack.component.html',
  styleUrls: ['./progress-stack.component.css']
})

export class ProgressStackComponent implements OnInit {
  constructor(
    private apiService: GetApiService,
    private savedToolchain: SavedToolchainService,
    private router: Router
  ) {}
  // tslint:disable-next-line: ban-types
  displayButton: Boolean = true;
  tool: Tool[] = [];
   errorMap = new Map();
   fillError: boolean;
  ngOnInit() {
  }
  get tabs(): string[] {
    if (this.apiService.subcategoriesState) {
       return this.apiService.subcategories.map(e => e.subsection);
    } else { return []; }
  }
  get currentTab(): number {
    return this.apiService.currentSubCategory;
  }

  get stages() {
    return this.apiService.stages;
  }
  get options() {
    return this.savedToolchain.stack;
  }
  getButton() {
    return this.savedToolchain.getButton();
  }
  getError() {

  }
  onClick(event: Event) {
    console.log(this.savedToolchain.getStack());
    this.savedToolchain.saveToolChainApi();
    this.router.navigate(['review']);

  }
  deleteTool(tool: Tool) {
    this.savedToolchain.removeTool(tool);
    // this.errorMap=this.savedToolchain.errMap;
    // if(this.errorMap.has(tool.stage)){
    //   this.fillError=true;
    // }
    // else{
    //   this.fillError=false;
    // }
    // console.log("error"+this.fillError);
  }
}
