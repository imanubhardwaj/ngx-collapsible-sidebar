import { NgModule } from '@angular/core';
// tslint:disable-next-line:max-line-length
import {NgxCollapsibleSidebarContainerComponent} from './components/ngx-collapsible-sidebar-container/ngx-collapsible-sidebar-container.component';
// tslint:disable-next-line:max-line-length
import {NgxCollapsibleSidebarContentComponent} from './components/ngx-collapsible-sidebar-content/ngx-collapsible-sidebar-content.component';

const components = [
  NgxCollapsibleSidebarContainerComponent,
  NgxCollapsibleSidebarContentComponent
];

@NgModule({
  declarations: [...components],
  imports: [
  ],
  exports: [...components]
})
export class NgxCollapsibleSidebarModule { }
