import { TestBed } from '@angular/core/testing';

import { FakeHousingService } from './fake-housing.service';

describe('FakeHousingService', () => {
  let service: FakeHousingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FakeHousingService);
  });

  it('should return houses', () => {
    service.all().subscribe(
      houses => expect(houses.length).toBe(9)
    );
  });

  it('should find houses', () => {
    service.find(1).subscribe(house => expect(house?.id).toBe(1));
    service.find(12).subscribe(house => expect(house).toBeUndefined());
  });
});
