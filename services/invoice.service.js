
const invoiceModel = require("../models/invoice.model")
const userModel = require("../models/user.model")

module.exports.addInvoice = async (req, res) => {
    const { name, date, phone, addrss } = req.body
    let invoices = await invoiceModel.insertMany({ name, date, phone, addrss })
    res.json({ message: "create invoice", invoices })
}



module.exports.updateInvoice = async (req, res) => {
    const { id, name, date, phone, addrss } = req.body
    let user = await userModel.findById({ _id: req.id })
    if (user.role == 'admin') {
        let invoice = await invoiceModel.findById(id);
        if (invoice) {
            await invoiceModel.updateMany({ name: name, date: date, phone: phone, addrss: addrss })
            res.json({ message: "update invoice is done" })
        } else {
            res.json({ message: 'This invoice is not available' })
        }
    }
    res.json({ message: "you are not authorized" })
}




module.exports.deleteInvoice = async (req,res) => {
    const {id} = req.body;

    let user = await userModel.findById({ _id: req.id })
    if (user.role == 'admin') {
    let invoice = await invoiceModel.deleteOne({id});
    res.json({message:"delete is done" , invoice})
    }
    res.json({message:"you are not authorized"})
}
 