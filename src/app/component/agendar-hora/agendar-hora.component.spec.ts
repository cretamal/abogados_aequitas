import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AgendarHoraComponent } from './agendar-hora.component';

describe('AgendarHoraComponent', () => {
  let component: AgendarHoraComponent;
  let fixture: ComponentFixture<AgendarHoraComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AgendarHoraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgendarHoraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
