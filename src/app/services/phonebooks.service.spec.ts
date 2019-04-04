import { TestBed } from '@angular/core/testing';

import { PhonebooksService } from './phonebooks.service';

describe('PhonebooksService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PhonebooksService = TestBed.get(PhonebooksService);
    expect(service).toBeTruthy();
  });
});
