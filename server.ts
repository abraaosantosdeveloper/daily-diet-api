import Fastify from 'fastify'

// Create a Fastify instance
const fastify = Fastify({
  logger: true,
})

// Declare a route
fastify.get('/', function(request, reply) {
  reply.send({ hello: 'world' })
})

// Run the server!
fastify.listen({ port: 3333 }, function (err) {
  if (err) {
    fastify.log.error(err)
    process.exit(1)
  }
})
