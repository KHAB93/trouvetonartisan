import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtisanModelComponent } from './artisan.model.component';

describe('ArtisanModelComponent', () => {
  let component: ArtisanModelComponent;
  let fixture: ComponentFixture<ArtisanModelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ArtisanModelComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArtisanModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
