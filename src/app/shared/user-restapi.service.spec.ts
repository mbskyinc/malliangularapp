import { TestBed } from '@angular/core/testing';

import { UserRestapiService } from './user-restapi.service';

describe('UserRestapiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UserRestapiService = TestBed.get(UserRestapiService);
    expect(service).toBeTruthy();
  });
});
