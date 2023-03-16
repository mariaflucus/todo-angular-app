import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemsActiveComponent } from './items-active.component';

describe('ItemsActiveComponent', () => {
  let component: ItemsActiveComponent;
  let fixture: ComponentFixture<ItemsActiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemsActiveComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItemsActiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
