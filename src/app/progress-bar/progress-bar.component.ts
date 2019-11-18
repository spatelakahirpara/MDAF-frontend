import { Component, OnInit } from "@angular/core";
import { GetApiService } from "../services/get-api.service";

@Component({
  selector: "app-progress-bar",
  templateUrl: "./progress-bar.component.html",
  styleUrls: ["./progress-bar.component.css"]
})
export class ProgressBarComponent implements OnInit {
  constructor(private apiService: GetApiService) {}
  getName(){
    return this.apiService.getUserName();
  }
  get stages(): string[] {
    if (this.apiService.stagesState)
      return this.apiService.stages.map(e => e.stage);
    else return [];
  }
  get currentStage(): number {
    return this.apiService.currentStage;
    this.apiService.getAllData();
  }
  set currentStage(i: number) { 
    this.apiService.currentStage = i;
    this.apiService.getAllData();
  }
  ngOnInit() {
    this.apiService.getAllData(); 
  }

  public onClickChevron(e: Event, i: number) {
    this.currentStage = i;
    this.apiService.currentSubCategory = 0;
  }

} 
