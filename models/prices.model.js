const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const pricesSchema = new Schema({
    title: { type: String, required: true }, // 名前　例)大人、小学生…など
    amount: { type: String, required: true }, // 値段
},{
    timestamps: true,
});

const Price = mongoose.model('Price', pricesSchema);

module.exports = Price;