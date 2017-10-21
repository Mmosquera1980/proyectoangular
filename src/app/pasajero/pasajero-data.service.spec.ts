import { TestBed, inject } from '@angular/core/testing';

import { PasajeroDataService } from './pasajero-data.service';

describe('PasajeroDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PasajeroDataService]
    });
  });

  it('should be created', inject([PasajeroDataService], (service: PasajeroDataService) => {
    expect(service).toBeTruthy();
  }));
});
