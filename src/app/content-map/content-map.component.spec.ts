import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentMapComponent } from './content-map.component';

describe('ContentMapComponent', () => {
  let component: ContentMapComponent;
  let fixture: ComponentFixture<ContentMapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContentMapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
