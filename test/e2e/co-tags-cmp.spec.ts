// globals from protractor
declare var describe:any
declare var it:any
declare var expect:any
declare var beforeEach:any
declare var browser:any

import { CoTagsCmpPageObject } from './co-tags-cmp.page-object'

describe('CoTagsCmpPageObject' , () => {
  beforeEach(() => {
    browser.get('/')
  })

  let pageObject = new CoTagsCmpPageObject()
  it('should be an input available', () => {
    expect(pageObject.coTagsInputEl).toBeDefined()
  })
})
