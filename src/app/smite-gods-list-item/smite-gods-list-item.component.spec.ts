import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmiteGodsListItemComponent } from './smite-gods-list-item.component';

describe('SmiteGodsListItemComponent', () => {
  let component: SmiteGodsListItemComponent;
  let fixture: ComponentFixture<SmiteGodsListItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SmiteGodsListItemComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SmiteGodsListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
