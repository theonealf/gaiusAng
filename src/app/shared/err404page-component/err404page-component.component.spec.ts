import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Err404pageComponentComponent } from './err404page-component.component';

describe('Err404pageComponentComponent', () => {
  let component: Err404pageComponentComponent;
  let fixture: ComponentFixture<Err404pageComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Err404pageComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Err404pageComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
