import { TestBed, inject } from '@angular/core/testing';

import { ChivaService } from './chiva.service';

describe('ChivaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ChivaService]
    });
  });

  it('should be created', inject([ChivaService], (service: ChivaService) => {
    expect(service).toBeTruthy();
  }));
});
