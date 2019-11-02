import {AfterContentInit, Component, ContentChild, ContentChildren, Input, QueryList, TemplateRef} from '@angular/core';
import {NgxCollapsibleSidebarSubItemComponent} from '../ngx-collapsible-sidebar-sub-item/ngx-collapsible-sidebar-sub-item.component';
import {CollapsedSidebarItemDirective} from '../../directives/collapsed-sidebar-item.directive';
import {ExpandedSidebarItemDirective} from '../../directives/expanded-sidebar-item.directive';

@Component({
  selector: 'ngx-collapsible-sidebar-item',
  templateUrl: './ngx-collapsible-sidebar-item.component.html',
  styleUrls: ['./ngx-collapsible-sidebar-item.component.scss']
})
export class NgxCollapsibleSidebarItemComponent implements AfterContentInit {
  @Input() title: string;
  @Input() icon: string;
  @ContentChild(CollapsedSidebarItemDirective, {static: false, read: TemplateRef}) collapsedItem: TemplateRef<any>;
  @ContentChild(ExpandedSidebarItemDirective, {static: false, read: TemplateRef}) expandedItem: TemplateRef<any>;
  @Input() path: string;
  @ContentChildren(NgxCollapsibleSidebarSubItemComponent) items: QueryList<NgxCollapsibleSidebarSubItemComponent>;
  highlightColor: string;
  collapsed = true;
  private active = false;

  get color(): string {
    return this.highlightColor;
  }

  set color(value: string) {
    this.highlightColor = value;
    this.items.forEach(item => {
      item.color = value;
    });
  }

  ngAfterContentInit(): void {
    this.items.forEach(item => {
      item.path = this.path + '/' + item.path;
    });
  }

  collapse() {
    this.collapsed = true;
    this.active = false;
  }

  expand() {
    this.collapsed = false;
    this.active = true;
  }
}
