import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserChooseButtonComponent } from './user-choose-button.component';

describe('UserChooseButtonComponent', () => {
  let component: UserChooseButtonComponent;
  let fixture: ComponentFixture<UserChooseButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserChooseButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserChooseButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
