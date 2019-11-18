import { TestBed } from '@angular/core/testing';

import { SavedToolchainService } from './saved-toolchain.service';

describe('SavedToolchainService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SavedToolchainService = TestBed.get(SavedToolchainService);
    expect(service).toBeTruthy();
  });
});
