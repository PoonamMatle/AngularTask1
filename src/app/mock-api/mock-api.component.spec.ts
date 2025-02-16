import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MockApiComponent } from './mock-api.component';

describe('MockApiComponent', () => {
  let component: MockApiComponent;
  let fixture: ComponentFixture<MockApiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MockApiComponent]
    });
    fixture = TestBed.createComponent(MockApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
