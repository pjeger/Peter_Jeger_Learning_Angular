import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmiteGodsListComponent } from './smite-gods-list.component';

describe('SmiteGodsListComponent', () => {
  let component: SmiteGodsListComponent;
  let fixture: ComponentFixture<SmiteGodsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SmiteGodsListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SmiteGodsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
