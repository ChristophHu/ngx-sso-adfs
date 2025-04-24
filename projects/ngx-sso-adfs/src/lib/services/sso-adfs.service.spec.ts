import { TestBed } from '@angular/core/testing'
import { SsoAdfsService } from './sso-adfs.service'

describe('SsoAdfsService', () => {
  let service: SsoAdfsService

  beforeEach(() => {
    TestBed.configureTestingModule({})
    service = TestBed.inject(SsoAdfsService)
  })

  it('should be created', () => {
    expect(service).toBeTruthy()
  })
})
