import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxCollapsibleSidebarComponent } from './ngx-collapsible-sidebar.component';

describe('NgxCollapsibleSidebarComponent', () => {
  let component: NgxCollapsibleSidebarComponent;
  let fixture: ComponentFixture<NgxCollapsibleSidebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxCollapsibleSidebarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxCollapsibleSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
