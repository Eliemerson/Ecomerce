import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ColaresComponent } from './colares.component';

describe('ColaresComponent', () => {
  let component: ColaresComponent;
  let fixture: ComponentFixture<ColaresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ColaresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ColaresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
