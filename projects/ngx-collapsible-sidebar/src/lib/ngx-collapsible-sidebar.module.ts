import { NgModule } from '@angular/core';
// tslint:disable-next-line:max-line-length
import {NgxCollapsibleSidebarContainerComponent} from './components/ngx-collapsible-sidebar-container/ngx-collapsible-sidebar-container.component';
// tslint:disable-next-line:max-line-length
import {NgxCollapsibleSidebarContentComponent} from './components/ngx-collapsible-sidebar-content/ngx-collapsible-sidebar-content.component';
import {NgxCollapsibleSidebarItemComponent} from './components/ngx-collapsible-sidebar-item/ngx-collapsible-sidebar-item.component';
// tslint:disable-next-line:max-line-length
import {NgxCollapsibleSidebarSubItemComponent} from './components/ngx-collapsible-sidebar-sub-item/ngx-collapsible-sidebar-sub-item.component';
import {ExpandedSidebarItemDirective} from './directives/expanded-sidebar-item.directive';
import {CollapsedSidebarItemDirective} from './directives/collapsed-sidebar-item.directive';
import {HideOnCollapseDirective} from './directives/hide-on-collapse.directive';
import {TruncatePipe} from './pipes/truncate.pipe';
import {RouterModule} from '@angular/router';
import {MatIconModule} from '@angular/material';
import {CommonModule} from '@angular/common';
import {NgxCollapsibleSidebarComponent} from './components/ngx-collapsible-sidebar/ngx-collapsible-sidebar.component';

const components = [
  NgxCollapsibleSidebarContainerComponent,
  NgxCollapsibleSidebarContentComponent,
  NgxCollapsibleSidebarComponent,
  NgxCollapsibleSidebarItemComponent,
  NgxCollapsibleSidebarSubItemComponent
];

const directives = [
  HideOnCollapseDirective,
  CollapsedSidebarItemDirective,
  ExpandedSidebarItemDirective
];

@NgModule({
  declarations: [
    ...components,
    ...directives,
    TruncatePipe
  ],
  imports: [
    CommonModule,
    MatIconModule,
    RouterModule
  ],
  exports: [
    ...components,
    ...directives
  ]
})
export class NgxCollapsibleSidebarModule { }
