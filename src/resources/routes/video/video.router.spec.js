import router from './video.router'

describe('video router', () => {
  test('has create, read and delete routes', () => {
    const routes = [
      { path: '/', method: 'get' },
      { path: '/', method: 'post' },
      { path: '/:video', method: 'get' },
      { path: '/:video', method: 'delete' }
    ]

    routes.forEach(route => {
      const match = router.stack.find(
        s => s.route.path === route.path && s.route.methods[route.method]
      )
      expect(match).toBeTruthy()
    })
  })
})
