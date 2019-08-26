import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PROJECTSComponent } from './projects.component';

describe('PROJECTSComponent', () => {
  let component: PROJECTSComponent;
  let fixture: ComponentFixture<PROJECTSComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PROJECTSComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PROJECTSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
