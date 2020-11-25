import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { BigBannerComponent } from './big-banner.component';

describe('BigBannerComponent', () => {
  let component: BigBannerComponent;
  let fixture: ComponentFixture<BigBannerComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ BigBannerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BigBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
