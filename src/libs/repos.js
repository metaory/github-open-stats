const UA = ['User-Agent', 'open-stats']
const getAuth = token => ['Authorization', `Bearer ${token}`]


const getUrl = username => `https://api.github.com/users/${username}/repos`
const getOpts = token => ({ headers: [UA, getAuth(token)] })

export default (username, token) => fetch(getUrl(username), getOpts(token))
