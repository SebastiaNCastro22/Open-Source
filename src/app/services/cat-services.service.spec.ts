import { TestBed } from '@angular/core/testing';

import { CatServicesService } from './cat-services.service';

describe('CatServicesService', () => {
  let service: CatServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CatServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
