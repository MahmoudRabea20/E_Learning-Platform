import { TestBed } from '@angular/core/testing';

import { Quiz } from './quizService';

describe('Quiz', () => {
  let service: Quiz;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Quiz);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
