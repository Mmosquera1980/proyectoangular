import { TestBed, inject } from '@angular/core/testing';

import { ChivaDataService } from './chiva-data.service';

describe('ChivaDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ChivaDataService]
    });
  });

  it('should be created', inject([ChivaDataService], (service: ChivaDataService) => {
    expect(service).toBeTruthy();
  }));
});
