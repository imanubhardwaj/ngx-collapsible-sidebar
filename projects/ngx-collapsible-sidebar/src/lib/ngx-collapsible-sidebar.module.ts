import { NgModule } from '@angular/core';
// tslint:disable-next-line:max-line-length
import {NgxCollapsibleSidebarContainerComponent} from './components/ngx-collapsible-sidebar-container/ngx-collapsible-sidebar-container.component';

const components = [
  NgxCollapsibleSidebarContainerComponent,
];

@NgModule({
  declarations: [...components],
  imports: [
  ],
  exports: [...components]
})
export class NgxCollapsibleSidebarModule { }
