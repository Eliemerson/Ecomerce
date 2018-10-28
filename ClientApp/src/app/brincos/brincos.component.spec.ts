import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrincosComponent } from './brincos.component';

describe('BrincosComponent', () => {
  let component: BrincosComponent;
  let fixture: ComponentFixture<BrincosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrincosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrincosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
