import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DispempComponent } from './dispemp.component';

describe('DispempComponent', () => {
  let component: DispempComponent;
  let fixture: ComponentFixture<DispempComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DispempComponent]
    });
    fixture = TestBed.createComponent(DispempComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
