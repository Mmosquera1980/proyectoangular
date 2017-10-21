import { TestBed, inject } from '@angular/core/testing';

import { ViajeDataService } from './viaje-data.service';

describe('ViajeDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ViajeDataService]
    });
  });

  it('should be created', inject([ViajeDataService], (service: ViajeDataService) => {
    expect(service).toBeTruthy();
  }));
});
