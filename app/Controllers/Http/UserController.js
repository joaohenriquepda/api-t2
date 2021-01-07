'use strict'

const User = use("App/Models/User")

class UserController {

    async all({ request }) {
        const user = await User.all()
        return user
    }


    async create({ request }) {
        const data = request.only(["name", "email", "password", "phone", "cpf"])
        const user = await User.create(data)
        return user
    }

}

module.exports = UserController
