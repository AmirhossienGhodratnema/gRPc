const mongoose = require('mongoose');


const Schema = new mongoose.Schema({
    id: { type: Number },
    title: { type: String },
    price: { type: String },
}, { timestamps: true, toJSON: { virtuals: true, versionKey: false } });


Schema.pre('save', async function (next) {
    try {
        const count = await this.constructor.countDocuments({});
        this.id = count + 1;
        next();
    } catch (err) {
        next(err);
    }
});


module.exports = {
    Products: mongoose.model('Products', Schema)
}