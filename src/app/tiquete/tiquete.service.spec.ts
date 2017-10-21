import { TestBed, inject } from '@angular/core/testing';

import { TiqueteService } from './tiquete.service';

describe('TiqueteService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TiqueteService]
    });
  });

  it('should be created', inject([TiqueteService], (service: TiqueteService) => {
    expect(service).toBeTruthy();
  }));
});
