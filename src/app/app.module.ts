import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { TableComponent } from './table/table.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { BillingComponent } from './billing/billing.component';
import { VirtualRealityComponent } from './virtual-reality/virtual-reality.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SignInComponent,
    TableComponent,
    SignUpComponent,
    BillingComponent,
    VirtualRealityComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    DragDropModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [HomeComponent, SignInComponent],
})
export class AppModule {}
