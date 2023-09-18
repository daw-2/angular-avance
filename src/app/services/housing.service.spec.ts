import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HousingService } from './housing.service';

describe('HousingService', () => {
  let service: HousingService;
  let http: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(HousingService);
    http = TestBed.inject(HttpTestingController);
  });

  it('should return houses', () => {
    service.all().subscribe(
      houses => expect(houses.length).toBe(3)
    );

    // Mock de la request
    const req = http.expectOne('http://localhost:3000/houses');
    expect(req.request.method).toBe('GET');
    req.flush([1, 2, 3]);
  });

  it('should find houses', () => {
    service.find(1).subscribe(house => expect(house?.id).toBe(1));

    // Mock de la request
    const req = http.expectOne('http://localhost:3000/houses/1');
    expect(req.request.method).toBe('GET');
    req.flush({ id: 1 });
  });
});
