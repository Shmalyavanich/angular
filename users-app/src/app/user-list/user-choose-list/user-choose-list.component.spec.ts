import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserChooseListComponent } from './user-choose-list.component';

describe('UserChooseListComponent', () => {
  let component: UserChooseListComponent;
  let fixture: ComponentFixture<UserChooseListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserChooseListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserChooseListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
