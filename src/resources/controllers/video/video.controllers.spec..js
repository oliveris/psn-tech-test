import controllers from '../video/video.controller'
import { isFunction } from 'lodash'

describe('video controller', () => {
  test('has methods', () => {
    const crudMethods = ['getMany', 'createOne', 'removeOne']

    crudMethods.forEach(name =>
      expect(isFunction(controllers[name])).toBe(true)
    )
  })
})
