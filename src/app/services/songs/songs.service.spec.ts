import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { SongsService } from './songs.service';

describe('SongsService', () => {
  let service: SongsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
    });
    service = TestBed.inject(SongsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
