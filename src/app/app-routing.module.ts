import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';
import { ReviewStackComponent } from './review-stack/review-stack.component';
import { SelectToolsComponent } from './select-tools/select-tools.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { BuildPipelineComponent } from './build-pipeline/build-pipeline.component';
import { SelectBuildComponent } from './select-build/select-build.component';
import { SelectBuildToolsComponent } from './select-build-tools/select-build-tools.component';


const routes: Routes = [
  {path: '', redirectTo:'/login', pathMatch:'full'},
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  {path:'review' , component: ReviewStackComponent},
  {path:'selectTools' , component: SelectToolsComponent},
  {path:'selectBuild' , component: SelectBuildComponent},
  {path:'trySelect' , component: SelectBuildToolsComponent},
  {path: 'build', component: BuildPipelineComponent},

    ];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
