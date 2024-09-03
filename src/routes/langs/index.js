import { Hono } from 'hono'
import { HTTPException } from 'hono/http-exception'

const route = new Hono()

route.get('/', () => {
  throw new HTTPException(401, { message: 'Custom error message' })
})

route.get('/:username', async c => {
  const username = c.req.param('username')
  const token = c.env.GITHUB_TOKEN

  console.log('::', { username, token })
  return c.json({ username, token })
  // const repos = await getRepos(username, token)
  //
  // console.log('repos', '::', repos, '<<<::')
  //
  // if (repos.ok === false)
  //   throw new HTTPException(repos.status, repos.statusText)
  //
  // const res = await repos.json()
  // console.log('res', '::', res, '<<<::')
  //
  // return c.json({ langs: true, username, repos, res })
})

export default route

