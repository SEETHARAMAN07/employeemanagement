import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DispleaveComponent } from './displeave.component';

describe('DispleaveComponent', () => {
  let component: DispleaveComponent;
  let fixture: ComponentFixture<DispleaveComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DispleaveComponent]
    });
    fixture = TestBed.createComponent(DispleaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
