import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectStructureSidebarComponent } from './project-structure-sidebar.component';

describe('ProjectStructureSidebarComponent', () => {
  let component: ProjectStructureSidebarComponent;
  let fixture: ComponentFixture<ProjectStructureSidebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectStructureSidebarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectStructureSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
