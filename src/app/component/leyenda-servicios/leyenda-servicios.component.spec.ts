import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeyendaServiciosComponent } from './leyenda-servicios.component';

describe('LeyendaServiciosComponent', () => {
  let component: LeyendaServiciosComponent;
  let fixture: ComponentFixture<LeyendaServiciosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeyendaServiciosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LeyendaServiciosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
