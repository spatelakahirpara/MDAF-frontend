import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';
import { ReviewStackComponent } from './review-stack/review-stack.component';
import { SelectToolsComponent } from './select-tools/select-tools.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {path: '', redirectTo:'/selectTools', pathMatch:'full'},
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  {path:'review' , component: ReviewStackComponent},
  {path:'selectTools' , component: SelectToolsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
