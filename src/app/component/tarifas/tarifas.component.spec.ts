import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { TarifasComponent } from './tarifas.component';

describe('TarifasComponent', () => {
  let component: TarifasComponent;
  let fixture: ComponentFixture<TarifasComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TarifasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TarifasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
