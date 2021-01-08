'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class UserSchema extends Schema {
  up() {
    this.create('users', (collection) => {
      collection.index('cpf', { cpf: 1 }, { unique: true })
      collection.index('email', { email: 1 }, { unique: true })
      collection.index('password', { password: 1 }, { unique: false })
      collection.index('phone', { phone: 1 }, { unit: false })
      collection.index('name', { name: 1 }, { unique: false })
      collection.index('status', { status: 1 }, { unique: false })
    })
  }

  down() {
    this.drop('users')
  }
}

module.exports = UserSchema
