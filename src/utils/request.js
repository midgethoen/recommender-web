
// get a new token every time
let tvdbToken;
async function getToken() {
  const res = await fetch(
    'http://localhost:9090/https://api.thetvdb.com/login',
    {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify({
        "apikey":"E5342FD4389AA955",
        "userkey": "C6D6B804328D9213",
        "username":"midgethoen"
      })
    }
  )
  const body = await res.json()
  tvdbToken = body.token
}
getToken()

export function resolveTVDBHeaders(headers = {}) {
  return {
    Authorization: `Bearer ${tvdbToken}`,
    'Content-type': 'application/json',
    ...headers,
  };
}

export function resolveTVDBUrl(path) {
  return `http://localhost:9090/https://api.thetvdb.com${path}`
}
