const userModel = require('../models/user.model');
const bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');
const { use } = require('../api/user.api');



module.exports.signup = async (req, res) => {
    const { name, email, password, role } = req.body
    const user = await userModel.findOne({ email })
    if (user) {
        res.json({ message: "account already exists" })
    } else {
        bcrypt.hash(password, 5, async function (err, hash) {
            await userModel.insertMany({ name, email, password: hash, role })
            res.json({ message: 'success' });
        });

    }
};




module.exports.signin = async (req, res) => {
    const { email, password } = req.body;
    let user = await userModel.findOne({ email })
    if (user) {
        const match = await bcrypt.compare(password, user.password);
        if (match) {
            let token = jwt.sign({ role: 'user', userid: user._id, name: user.name, emailConfirm: user.emailConfirm }, 'amr');
            res.json({ message: "success", token })
        } else {
            res.json({ message: "password incorrect" })
        }
    } else {
        res.json({ message: "email dose't exist" })
    };
};




module.exports.changePass = async (req, res) => {
    const { oldPass, newPass, repass } = req.body;

    let user = await userModel.findOne({ _id: req.id })

    if (user) {
        const match = await bcrypt.compare(oldPass, user.password);
        if (match) {
            bcrypt.hash(newPass, 5, async function (err, hash) {
                if (err) {
                    res.json(err)
                } else {
                    if (newPass === repass) {
                        await userModel.updateOne({ password: hash })
                        res.json({ message: "update is done" })
                    } else {
                        res.json({ message: "password is not matching repassword" })
                    }
                }
            });
        } else {
            res.json({ message: "password is not correct" })
        }
    } else {
        res.json({ message: "user not found" })
    }
};



module.exports.updateAccount = async (req, res) => {
    const { name, email } = req.body;
    let user = await userModel.findOne({ _id: req.id })
    if (user) {
        if (user.email === email && user.name === name) {
            res.json({ message: "You did not update any data" })
        } else {
            await userModel.findByIdAndUpdate({ _id: req.id }, { name: name, email: email })
            res.json({ message: "update is done" })
        }
    }
}



module.exports.deleteAccount = async (req, res) => {
    const { password } = req.body;
    let user = await userModel.findOne({ _id: req.id })
    if (user) {
        const match = await bcrypt.compare(password, user.password);
        if (match) {
            await userModel.deleteOne({ _id: req.id })
            res.json({ message: "delete is done" })
        } else {
            res.json({ message: "password is not correct" })
        }
    } else {
        res.json({ message: "You cannot perform this operation" })
    }
}