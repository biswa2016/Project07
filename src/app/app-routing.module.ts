import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChartboxComponent } from './chartbox/chartbox.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {path:"",component:RegistrationComponent},
  {path:"reg",component:RegistrationComponent},
  {path:"log",component:LoginComponent},
  // {path:"cb",component:ChartboxComponent},
  {path:"box",loadChildren:()=>import('./cmodules/cmodules.module').then(m=>m.CmodulesModule),canActivate:[AuthGuard] }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
