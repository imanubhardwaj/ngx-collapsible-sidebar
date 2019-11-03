import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './pages/home.component';
import {GapsComponent} from './pages/gaps.component';
import {HotelsComponent} from './pages/hotels.component';
import {StatsComponent} from './pages/stats.component';
import {CampaignsComponent} from './pages/campaigns.component';
import {AlertsComponent} from './pages/alerts.component';
import {PersonalSettingsComponent} from './pages/personal-settings.component';
import {ProfileComponent} from './pages/profile.component';
import {PaymentSettingsComponent} from './pages/payment-settings.component';
import {BillingSettingsComponent} from './pages/billing-settings.component';


const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'gaps', component: GapsComponent},
  {path: 'hotels', component: HotelsComponent},
  {path: 'stats', component: StatsComponent},
  {path: 'campaigns', component: CampaignsComponent},
  {path: 'alerts', component: AlertsComponent},
  {path: 'profile', children: [
      {path: 'personal', component: PersonalSettingsComponent},
      {path: 'payment', component: PaymentSettingsComponent},
      {path: 'billing', component: BillingSettingsComponent},
    ], component: ProfileComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
