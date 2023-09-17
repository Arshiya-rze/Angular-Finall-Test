import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListSignUpComponent } from './list-sign-up.component';

describe('ListSignUpComponent', () => {
  let component: ListSignUpComponent;
  let fixture: ComponentFixture<ListSignUpComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListSignUpComponent]
    });
    fixture = TestBed.createComponent(ListSignUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
