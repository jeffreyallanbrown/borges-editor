import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectStudioComponent } from './project-studio.component';

describe('ProjectStudioComponent', () => {
  let component: ProjectStudioComponent;
  let fixture: ComponentFixture<ProjectStudioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectStudioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectStudioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
