import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonligtbrevComponent } from './personligtbrev.component';

describe('PersonligtbrevComponent', () => {
  let component: PersonligtbrevComponent;
  let fixture: ComponentFixture<PersonligtbrevComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonligtbrevComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonligtbrevComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
