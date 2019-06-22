import { TestBed } from '@angular/core/testing';

import { DatabaseOperationsService } from './database-operations.service';

describe('DatabaseOperationsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DatabaseOperationsService = TestBed.get(DatabaseOperationsService);
    expect(service).toBeTruthy();
  });
});
