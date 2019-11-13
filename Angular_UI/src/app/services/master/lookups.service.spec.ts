import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { LookupsService } from './lookups.service';

describe('LookupsService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [ HttpClientTestingModule ],
  }));

  it('should be created', () => {
    const service: LookupsService = TestBed.get(LookupsService);
    expect(service).toBeTruthy();
  });
});
