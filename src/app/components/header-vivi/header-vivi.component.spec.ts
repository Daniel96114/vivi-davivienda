import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderViviComponent } from './header-vivi.component';

describe('HeaderViviComponent', () => {
  let component: HeaderViviComponent;
  let fixture: ComponentFixture<HeaderViviComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderViviComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderViviComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
