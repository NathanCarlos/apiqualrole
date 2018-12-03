require('dotenv').config()
const fastify = require('fastify')({ logger: true })
const routes = require('./routes/index')
const port = process.env.SERVER_PORT || 8081

fastify.register(require('fastify-swagger'), {
  exposeRoute: true,
  routePrefix: '/swagger',
  swagger: {
    info: {
      title: 'QualRole',
      version: '0.1.0'
    },
    // host: 'localhost:3000',
    schemes: ['http'],
    consumes: ['application/json'],
    produces: ['application/json'],
    tags: [
      { name: 'QualRole-Api', description: 'QualRole-Api documentation.' }
    ]
  }
})
fastify.register(require('fastify-cors'))
fastify.register(require('fastify-multipart'))

for (const r in routes) {
  fastify.register(routes[r])
}

const start = async () => {
  try {
    fastify.ready(err => {
      if (err) {
        throw err
      }
      fastify.swagger()
    })

    await fastify.listen(port, '0.0.0.0')
    await fastify.log.info(`server listening on ${fastify.server.address().port}`)
  } catch (err) {
    fastify.log.error(err)
    console.error(err)
    process.exit(1)
  }
}

start()
