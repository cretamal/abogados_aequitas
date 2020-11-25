import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { MediacionComponent } from './mediacion.component';

describe('MediacionComponent', () => {
  let component: MediacionComponent;
  let fixture: ComponentFixture<MediacionComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MediacionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MediacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
