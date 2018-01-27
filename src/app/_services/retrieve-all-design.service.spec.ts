import { TestBed, inject } from '@angular/core/testing';

import { RetrieveAllDesignService } from './retrieve-all-design.service';

describe('RetrieveAllDesignService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RetrieveAllDesignService]
    });
  });

  it('should be created', inject([RetrieveAllDesignService], (service: RetrieveAllDesignService) => {
    expect(service).toBeTruthy();
  }));
});
