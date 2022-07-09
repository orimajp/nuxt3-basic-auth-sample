export default defineEventHandler((event) => {
  const config = useRuntimeConfig()

//  if (config?.BASIC_AUTH_ENABLED !== "true") return
  if (!config?.BASIC_AUTH_ENABLED) return

  const base64Credentials = event.req.headers?.authorization?.split(' ')?.[1]

  if (base64Credentials) {
    const credentials = Buffer.from(base64Credentials, 'base64').toString('ascii')
    const [username, password] = credentials.split(':')

    if (username === config?.BASIC_AUTH_USER &&
      password === config?.BASIC_AUTH_PASSWORD) return
  }

  event.res.statusCode = 401
  event.res.setHeader("WWW-Authenticate", 'Basic realm="Secure Area"')
  event.res.end('Unauthorized')
})
