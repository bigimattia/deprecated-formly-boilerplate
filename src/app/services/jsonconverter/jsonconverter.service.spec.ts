import { TestBed } from '@angular/core/testing';

import { JsonconverterService } from './jsonconverter.service';

describe('JsonconverterService', () => {
  let service: JsonconverterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JsonconverterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
