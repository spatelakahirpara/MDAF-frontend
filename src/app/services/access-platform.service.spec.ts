import { TestBed } from '@angular/core/testing';

import { AccessPlatformService } from './access-platform.service';

describe('AccessPlatformService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AccessPlatformService = TestBed.get(AccessPlatformService);
    expect(service).toBeTruthy();
  });
});
