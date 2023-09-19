import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';

import { HousesPage } from './houses.page';
import { HousingService } from 'src/app/services/housing.service';
import { FakeHousingService } from 'src/app/services/fake-housing.service';
import { HouseCardComponent } from 'src/app/components/house-card/house-card.component';
import { TaxPipe } from 'src/app/modules/shared/tax.pipe';

describe('HousesPage', () => {
  let component: HousesPage;
  let fixture: ComponentFixture<HousesPage>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HousesPage, HouseCardComponent, TaxPipe],
      providers: [{ provide: HousingService, useExisting: FakeHousingService }]
    });
    fixture = TestBed.createComponent(HousesPage);
    component = fixture.componentInstance;
    // fixture.detectChanges();
  });

  it('should create', () => {
    fixture.detectChanges();
    expect(component).toBeTruthy();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelectorAll('h2').length).toBe(9);
  });

  it('should console log', fakeAsync(() => {
    spyOn(console, 'log');
    fixture.detectChanges();
    tick(1000);
    expect(console.log).toHaveBeenCalled();
  }));
});
