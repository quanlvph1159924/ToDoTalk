import { VirtualRealityComponent } from './virtual-reality/virtual-reality.component';
import { BillingComponent } from './billing/billing.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { TableComponent } from './table/table.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'dashboard', component: HomeComponent},
  {path:'sign-in', component: SignInComponent},
  {path:'tables', component: TableComponent},
  {path:'sign-up', component: SignUpComponent},
  {path:'billing', component: BillingComponent},
  {path:'virtual-reality', component: VirtualRealityComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
