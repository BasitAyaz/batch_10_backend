const UserModel = require('../models/usermodel')

const UserController = {
    getAll: async (req, res) => {
        try {
            let result = await UserModel.find({})
            res.status(200).send({
                isSuccessfull: true,
                data: result,
                message: "Data fetched successfully",
            })
        } catch (error) {
            res.status(500).send({
                isSuccessfull: false,
                data: error,
                message: "Internal Server Error",
                error: error.message,
            })
        }
    },
    getById: async (req, res) => {
        try {
            let id = req.params.id
            let result = await UserModel.findById(id)
            res.status(200).send({
                isSuccessfull: true,
                data: result,
                message: "Data fetched successfully",
            })
        } catch (error) {
            res.status(500).send({
                isSuccessfull: false,
                data: null,
                message: "No data found for this ID",
                error: error.message,
            });
        }

    },
    add: async (req, res) => {
        try {
            const body = req.body
            let obj = {
                firstName: body.firstName,
                lastName: body.lastName,
                email: body.email,
                password: body.password
            }

            let existingUser = await UserModel.findOne({
                email: obj.email
            })
            if (existingUser) {
                res.status(409).send({
                    isSuccessfull: false,
                    data: null,
                    message: "User already exists with this email",
                })
                return;  // Stop the function if user already exists
            }

            let UserObj = new UserModel(obj)
            UserObj.save().then((result) => {
                res.status(201).send({
                    isSuccessfull: true,
                    data: result,
                    message: "User added successfully",
                })
            }).catch((err) => {
                res.status(500).send({
                    isSuccessfull: false,
                    data: null,
                    message: "Internal Server Error",
                    error: err,
                })
            });

        } catch (error) {
            res.status(500).send({
                isSuccessfull: false,
                data: error,
                message: "Internal Server Error",
                error: error.message,
            });
        }

    },
    update: (req, res) => {
        try {
            let id = req.params.id;
            let body = {
                ...req.body,
                updated_at: new Date()
            };
            UserModel.findByIdAndUpdate(id, body, { new: true })
                .then((result) => {
                    res.status(200).send({
                        isSuccessfull: true,
                        data: result,
                        message: "User updated successfully",
                    })
                })
                .catch((err) => {
                    throw err;
                });

        } catch (error) {
            res.status(500).send({
                isSuccessfull: false,
                data: error,
                message: "Internal Server Error",
                error: error.message,
            });
        }
    },
    del: (req, res) => {
        try {
            let id = req.params.id;
            UserModel.findByIdAndDelete(id)
                .then((result) => {
                    res.status(200).send({
                        isSuccessfull: true,
                        data: null,
                        message: "User deleted successfully",
                    })
                })
                .catch((err) => {
                    res.status(500).send({
                        isSuccessfull: false,
                        data: null,
                        message: "Internal Server Error",
                        error: error.message,
                    })
                });
        } catch (error) {
            res.status(500).send({
                isSuccessfull: false,
                data: error,
                message: "Internal Server Error",
                error: error.message,
            });
        }
    },
}


module.exports = UserController;