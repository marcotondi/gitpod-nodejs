'use strict'

module.exports = async function (fastify, opts) {

  fastify.log.info('Ciao da gitpod.io')
  fastify.get('/', async function (request, reply) {
    return 'Ciao da gitpod.io'
  })
}
