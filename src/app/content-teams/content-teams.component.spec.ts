import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentTeamsComponent } from './content-teams.component';

describe('ContentTeamsComponent', () => {
  let component: ContentTeamsComponent;
  let fixture: ComponentFixture<ContentTeamsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContentTeamsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentTeamsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
