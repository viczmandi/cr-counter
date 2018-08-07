import { TestBed, inject } from '@angular/core/testing';

import { YqlApiService } from './yql-api.service';

describe('YqlApiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [YqlApiService]
    });
  });

  it('should be created', inject([YqlApiService], (service: YqlApiService) => {
    expect(service).toBeTruthy();
  }));
});
