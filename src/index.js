import GitHub from 'gh.js'

export default function locatedIn(locations = [], {
  all = false,
  sort = 'followers',
  per_page = 50,
  keyword,
  token
} = {}) {
  return new Promise((resolve, reject) => {
    const gh = new GitHub(token)
    const q = locations.map(location => `location:${location}`).join(' ') +
      (keyword ? ` ${keyword}` : '')
    gh.get('search/users', {
      all,
      opts: {
        sort,
        per_page,
        q
      }
    }, (err, data) => {
      if (err) reject(err)
      else resolve(data)
    })
  })
}
