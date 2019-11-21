import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

import { MaterialModule } from "./material.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ToolPickerComponent } from "./tool-picker/tool-picker.component";
import { ProgressBarComponent } from "./progress-bar/progress-bar.component";
import { GetApiService } from "./services/get-api.service";
import { ProgressStackComponent } from "./progress-stack/progress-stack.component";

import { AppRoutingModule } from "./app-routing.module";
import { ReviewStackComponent } from './review-stack/review-stack.component';
import { SelectToolsComponent } from './select-tools/select-tools.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { BuildPipelineComponent } from './build-pipeline/build-pipeline.component';

@NgModule({
  declarations: [
    AppComponent,
    ToolPickerComponent,
    ProgressBarComponent,
    ProgressStackComponent,
    
    ReviewStackComponent,
    SelectToolsComponent,
    LoginComponent,
    RegisterComponent,
    BuildPipelineComponent,
  
   
  ],
  imports: [
    MaterialModule,
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    NgbModule,
    AppRoutingModule,
    ReactiveFormsModule

  ],
  providers: [GetApiService],
  bootstrap: [AppComponent]
})
export class AppModule {}
