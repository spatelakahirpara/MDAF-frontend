import { Component, OnInit } from "@angular/core";
import { GetApiService, Tool } from "../services/get-api.service";
import { SavedToolchainService } from "../services/saved-toolchain.service";
import { Router } from '@angular/router';

@Component({
  selector: "app-progress-stack",
  templateUrl: "./progress-stack.component.html",
  styleUrls: ["./progress-stack.component.css"]
})

export class ProgressStackComponent implements OnInit {
  constructor(
    private apiService: GetApiService,
    private savedToolchain: SavedToolchainService,
    private router: Router
  ) {}
  displayButton: Boolean=true;
  tool: Tool[]=[];

  ngOnInit() {
     
  }

  get stages() {
    return this.apiService.stages;
  }
  get options() {
    return this.savedToolchain.stack;
  }
  getButton(){
    return this.savedToolchain.getButton();
  }
  onClick(event:Event){
    console.log(this.savedToolchain.getStack());
    this.router.navigate(['review']);

  }
  deleteTool(tool:Tool){
    
    this.savedToolchain.removeTool(tool);

  }
}
