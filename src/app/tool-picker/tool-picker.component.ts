import { Component, OnInit } from "@angular/core";
import { GetApiService, Tool } from "../services/get-api.service";
import { SavedToolchainService } from "../services/saved-toolchain.service";

@Component({
  selector: "app-tool-picker",
  templateUrl: "./tool-picker.component.html",
  styleUrls: ["./tool-picker.component.css"]
})
export class ToolPickerComponent implements OnInit {
  changeText: boolean;
  constructor(
    private apiService: GetApiService,
    private savedToolchain: SavedToolchainService
  ) {
    this.changeText = false;
  }
  choice: number;
  
  
  get tabs(): string[] {
    if (this.apiService.subcategoriesState)
      return this.apiService.subcategories.map(e => e.subsection);
    else return [];
  }

  get options(): Tool[][] {
    if (this.apiService.toolsState) return this.apiService.tools;
    else return [];
  }

  get currentTab(): number {
    return this.apiService.currentSubCategory;
  }
  set currentTab(i: number) {
    this.apiService.currentSubCategory = i;
  }

  get currentStage(): number {
    return this.apiService.currentStage;
  }
  set currentStage(i: number) {
    this.apiService.currentStage = i;
    this.currentTab = 0;
  }

  public onClick(event: Event) {
    if(this.options[this.currentTab][0].stage=="Monitor"){
        console.log("got it");
        this.storeChoice();
        this.savedToolchain.showButton=true;
    }
    else{
      this.storeChoice();
      if (this.currentTab < this.apiService.subcategories.length - 1)
       { 
         this.currentTab = 1 + this.currentTab;
        }

      else {this.currentStage = 1 + this.currentStage;
      // this.apiService.currentStage= this.currentStage
      }

      
      this.savedToolchain.showButton=false;
      this.apiService.getAllData();
    }
    
  }
 
  private storeChoice() {
    const tool = this.options[this.currentTab][this.choice];
    this.savedToolchain.addStack(tool);
    this.choice=null;  
  } 
 
  ngOnInit() {
    // this.apiService.callStagesApi();
    // this.apiService.getSubcategories();
    this.apiService.getAllData();
    
    // console.log(this.apiService.subcategoriesState);
    // this.apiService.getTools();
    // console.log(this.apiService.toolsState);
  }
}
