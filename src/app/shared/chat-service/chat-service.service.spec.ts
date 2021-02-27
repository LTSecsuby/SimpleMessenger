import { TestBed } from '@angular/core/testing';

import { ChatServiceService } from './chat-service.service';

describe('SearchUsersService', () => {
  let service: ChatServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChatServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
