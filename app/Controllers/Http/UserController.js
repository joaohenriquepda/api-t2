'use strict'

const User = use("App/Models/User")

class UserController {

    async all({ request, response }) {
        const users = await User.where({ status: true }).fetch()
        return users.rows
    }

    async create({ request }) {

        try {
            const data = request.only(["name", "email", "password", "phone", "cpf"])
            data.status = true;
            const user = await User.create(data)
            return user

        } catch (error) {
            return response.status(error.status).json({
                error: {
                    message: "Error when Update User",
                    error: error.message
                }
            })

        }

    }

    async update({ request, params, response }) {

        try {
            const aux = await User.where({ _id: params.id }).fetch();
            const user = aux.rows[0]
            const data = request.only(["name", "email", "password", "phone"])
            user.merge(data);
            user.save();

            return user

        } catch (error) {
            return response.status(error.status).json({
                error: {
                    message: "Error when Update User",
                    error: error.message
                }
            })
        }
    }

    async delete({ response, params, request }) {

        try {
            const aux = await User.where({ _id: params.id }).fetch();
            const user = aux.rows[0]
            user.status = false;
            user.save();
            return user

        } catch (error) {
            return response.status(error.status).json({
                error: {
                    message: "Error when Update User",
                    error: error.message
                }
            })
        }
    }

}

module.exports = UserController
