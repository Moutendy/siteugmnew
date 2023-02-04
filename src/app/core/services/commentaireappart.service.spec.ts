import { TestBed } from '@angular/core/testing';

import { CommentaireappartService } from './commentaireappart.service';

describe('CommentaireappartService', () => {
  let service: CommentaireappartService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CommentaireappartService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
