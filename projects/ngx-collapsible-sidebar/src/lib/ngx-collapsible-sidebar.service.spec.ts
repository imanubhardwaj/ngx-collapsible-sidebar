import { TestBed } from '@angular/core/testing';

import { NgxCollapsibleSidebarService } from './ngx-collapsible-sidebar.service';

describe('NgxCollapsibleSidebarService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgxCollapsibleSidebarService = TestBed.get(NgxCollapsibleSidebarService);
    expect(service).toBeTruthy();
  });
});
