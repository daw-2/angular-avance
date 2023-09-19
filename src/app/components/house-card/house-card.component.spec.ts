import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HouseCardComponent } from './house-card.component';
import { FakeHousingService } from 'src/app/services/fake-housing.service';
import { TaxPipe } from 'src/app/modules/shared/tax.pipe';

describe('HouseCardComponent', () => {
  let component: HouseCardComponent;
  let fixture: ComponentFixture<HouseCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HouseCardComponent, TaxPipe]
    });
    fixture = TestBed.createComponent(HouseCardComponent);
    component = fixture.componentInstance;
    component.house = TestBed.inject(FakeHousingService).houses[0];
    component.house.rental = 100;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h2')?.textContent).toContain(component.house.name);
    expect(compiled.querySelector('p')?.textContent).toContain('$120.00 / mois');
  });
});
