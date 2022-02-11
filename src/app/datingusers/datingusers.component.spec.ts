import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatingusersComponent } from './datingusers.component';

describe('DatingusersComponent', () => {
  let component: DatingusersComponent;
  let fixture: ComponentFixture<DatingusersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatingusersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatingusersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
