import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { NgxCollapsibleSidebarModule } from '../../projects/ngx-collapsible-sidebar/src/lib/ngx-collapsible-sidebar.module';
import {HomeComponent} from './pages/home.component';
import {GapsComponent} from './pages/gaps.component';
import {HotelsComponent} from './pages/hotels.component';
import {StatsComponent} from './pages/stats.component';
import {CampaignsComponent} from './pages/campaigns.component';
import {AlertsComponent} from './pages/alerts.component';
import {ProfileComponent} from './pages/profile.component';
import {PersonalSettingsComponent} from './pages/personal-settings.component';
import {PaymentSettingsComponent} from './pages/payment-settings.component';
import {BillingSettingsComponent} from './pages/billing-settings.component';

const components = [
  AppComponent,
  HomeComponent,
  GapsComponent,
  HotelsComponent,
  StatsComponent,
  CampaignsComponent,
  AlertsComponent,
  ProfileComponent,
  PersonalSettingsComponent,
  PaymentSettingsComponent,
  BillingSettingsComponent
];

@NgModule({
  declarations: [
    ...components
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    NgxCollapsibleSidebarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
