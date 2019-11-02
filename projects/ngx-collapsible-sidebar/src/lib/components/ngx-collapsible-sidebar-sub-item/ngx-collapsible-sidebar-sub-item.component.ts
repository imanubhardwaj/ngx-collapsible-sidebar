import {Component, Input} from '@angular/core';

@Component({
  selector: 'ngx-collapsible-sidebar-sub-item',
  templateUrl: './ngx-collapsible-sidebar-sub-item.component.html',
  styleUrls: ['./ngx-collapsible-sidebar-sub-item.component.scss']
})
export class NgxCollapsibleSidebarSubItemComponent {
  @Input() title: string;
  @Input() path: string;
  color: string;
}
