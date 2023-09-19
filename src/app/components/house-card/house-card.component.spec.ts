import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HouseCardComponent } from './house-card.component';
import { FakeHousingService } from 'src/app/services/fake-housing.service';

describe('HouseCardComponent', () => {
  let component: HouseCardComponent;
  let fixture: ComponentFixture<HouseCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HouseCardComponent]
    });
    fixture = TestBed.createComponent(HouseCardComponent);
    component = fixture.componentInstance;
    component.house = TestBed.inject(FakeHousingService).houses[0];
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h2')?.textContent).toContain(component.house.name);
  });
});
