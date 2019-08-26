import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SalessidebarComponent } from './salessidebar.component';

describe('SalessidebarComponent', () => {
  let component: SalessidebarComponent;
  let fixture: ComponentFixture<SalessidebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalessidebarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalessidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
