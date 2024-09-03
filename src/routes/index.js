import { Hono } from 'hono'
import langs from './langs'

const noop = c => c.json({ ok: true })

const app = new Hono()

app.get('/', noop)

app.get('/favicon.ico', noop)

app.route('/langs', langs)

export default app
