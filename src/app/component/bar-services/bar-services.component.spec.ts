import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { BarServicesComponent } from './bar-services.component';

describe('BarServicesComponent', () => {
  let component: BarServicesComponent;
  let fixture: ComponentFixture<BarServicesComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ BarServicesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BarServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
