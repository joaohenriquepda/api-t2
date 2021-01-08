'use strict'

const User = use('App/Models/User')

class SessionController {

    async create({ request, auth }) {

        const { cpf, password } = request.all()

        const token = await auth.attempt(cpf, password)

        const aux = await User.where({cpf: cpf}).fetch()
        const user = aux.rows[0]
        console.log(user);
        token.id = user._id
        token.cpf = user.cpf
        token.name = user.name
        token.email = user.email
        token.phone = user.phone
        token.status = user.status

        return token
    }
}

module.exports = SessionController
