import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsdEurRateComponent } from './usd-eur-rate.component';

describe('UsdEurRateComponent', () => {
  let component: UsdEurRateComponent;
  let fixture: ComponentFixture<UsdEurRateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UsdEurRateComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UsdEurRateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
