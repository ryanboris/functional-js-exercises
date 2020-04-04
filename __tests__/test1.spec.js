const { identity } = require('../src/index')

describe('identity', () => {
  test('should return the argument, as is', () => {
    expect(identity('a')).toBe('a')
    expect(identity(3)).toBe(3)
    expect(identity(true)).toBe(true)
    expect(identity(10)).not.toBe(3)
  })
})
