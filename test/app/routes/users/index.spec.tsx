import Users, { loader } from '~/routes/users'

jest.mock('~/utils/db.server', () => ({
  db: {
    user: {
      findMany: () => [],
    },
  },
}))

describe('loader', () => {
  it('should load some users', async () => {
    const actual = await loader()

    expect(actual).toEqual({ users: [] })
  })
})

describe('Users', () => {
  // 1. We need testEnvironment: jsdom
  // 2. How can we mock `useLoaderData()`?
  it.todo('should render the heading')
})
