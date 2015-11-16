import 'reflect-metadata'
import 'zone.js'
import { CoTagsCmp } from '../src/co-tags/co-tags-cmp'

describe('CoTagsCmp', () => {
  it('should be defined', () => {
    expect(CoTagsCmp).toBeDefined()
  })

  it('should be able to add new tags', () => {
    let coTagsCmp = new CoTagsCmp()
    coTagsCmp.tags = ['a', 'b']
    coTagsCmp.addTag('c')
    expect(coTagsCmp.tags).toEqual(['a', 'b', 'c'])
  })

  it('should be able to remove tags', () => {
    let coTagsCmp = new CoTagsCmp()
    coTagsCmp.tags = ['a', 'b', 'c']
    coTagsCmp.removeTag('b')
    expect(coTagsCmp.tags).toEqual(['a', 'c'])
  })
})
