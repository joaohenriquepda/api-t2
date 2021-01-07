'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class TokensSchema extends Schema {
  up () {
    this.create('tokens', (collection) => {

      collection.index('user_id', { user_id: 1 }, { unique: false })
      collection.index('token', { token: 1 }, { unique: true })
      collection.index('type', { type: 1 }, { unique: true })
      collection.index('is_revoked', { is_revoked: 1 }, { unit: false })
    })
  }

  down () {
    this.drop('tokens')
  }
}

module.exports = TokensSchema
