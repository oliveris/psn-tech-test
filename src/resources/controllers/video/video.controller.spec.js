import controller from './video.controller'
import { isFunction } from 'lodash'

describe('video controller', () => {
  // Test the controller contains these methods
  test('has methods', () => {
    const crudMethods = [
      'getMany',
      'createMany',
      'getOne',
      'removeOne',
      'getFilteredMany'
    ]

    crudMethods.forEach(name => expect(isFunction(controller[name])).toBe(true))
  })
})
