const mongoose = require('mongoose');


const Schema = new mongoose.Schema({
    id: { type: Number },
    title: { type: String },
    price: { type: String },
}, { timestamps: true, toJSON: { virtuals: true, versionKey: false } });


Schema.pre('save', function (next) {
    const self = this;
    self.constructor.count(async function (err, data) {
        if (err) return next(err);
        mongoose.model.set({ id: { data: +1 } });
        next();
    });
});


module.exports = {
    Products: mongoose.model('Products', Schema)
}