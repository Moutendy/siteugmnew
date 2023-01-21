import { TestBed } from '@angular/core/testing';

import { UgmInterceptor } from './ugm.interceptor';

describe('UgmInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      UgmInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: UgmInterceptor = TestBed.inject(UgmInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
