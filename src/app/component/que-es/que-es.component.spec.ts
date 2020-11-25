import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { QueEsComponent } from './que-es.component';

describe('QueEsComponent', () => {
  let component: QueEsComponent;
  let fixture: ComponentFixture<QueEsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ QueEsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QueEsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
