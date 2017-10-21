import { TestBed, inject } from '@angular/core/testing';

import { TiqueteDataService } from './tiquete-data.service';

describe('TiqueteDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TiqueteDataService]
    });
  });

  it('should be created', inject([TiqueteDataService], (service: TiqueteDataService) => {
    expect(service).toBeTruthy();
  }));
});
