import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePage } from './home.page';
import { HouseCardComponent } from 'src/app/components/house-card/house-card.component';
import { TaxPipe } from 'src/app/modules/shared/tax.pipe';
import { RouterTestingModule } from '@angular/router/testing';

describe('HomePage', () => {
  let component: HomePage;
  let fixture: ComponentFixture<HomePage>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomePage, HouseCardComponent, TaxPipe],
      imports: [RouterTestingModule],
    });
    fixture = TestBed.createComponent(HomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
    const compiled = fixture.nativeElement as HTMLElement; // Forcer le typage avec TypeScript
    expect(compiled.querySelectorAll('h2').length).toBe(4);
  });
});
