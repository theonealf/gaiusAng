import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TavlaComponent } from './tavla.component';

describe('TavlaComponent', () => {
  let component: TavlaComponent;
  let fixture: ComponentFixture<TavlaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TavlaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TavlaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
