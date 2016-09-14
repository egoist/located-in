import test from 'ava'
import locatedIn from './'

test('main', async t => {
  const users = await locatedIn(['china'], {
    keyword: 'EGOIST'
  })
  t.is(users.items[0].login, 'egoist')
})
