import { TestBed } from '@angular/core/testing';

import { CommentaireactuService } from './commentaireactu.service';

describe('CommentaireactuService', () => {
  let service: CommentaireactuService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CommentaireactuService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
