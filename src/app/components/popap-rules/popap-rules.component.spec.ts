import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopapRulesComponent } from './popap-rules.component';

describe('PopapRulesComponent', () => {
  let component: PopapRulesComponent;
  let fixture: ComponentFixture<PopapRulesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopapRulesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopapRulesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
