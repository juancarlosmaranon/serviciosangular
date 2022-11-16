import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HijocomicsComponent } from './hijocomics.component';

describe('HijocomicsComponent', () => {
  let component: HijocomicsComponent;
  let fixture: ComponentFixture<HijocomicsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HijocomicsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HijocomicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
