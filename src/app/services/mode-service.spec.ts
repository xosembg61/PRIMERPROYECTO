import { TestBed } from '@angular/core/testing';
import { ModeService } from './mode-service';

describe('ModeService', () => {
  let service: ModeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ModeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should toggle the shared mode and document class', () => {
    service.cambiar();

    expect(service.modo()).toBe(true);
    expect(document.documentElement.classList.contains('modo-oscuro')).toBe(true);

    service.cambiar();

    expect(service.modo()).toBe(false);
    expect(document.documentElement.classList.contains('modo-oscuro')).toBe(false);
  });
});
