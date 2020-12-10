const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const customersSchema = new Schema({
    checkin: { type: Date, required: true }, // チェックイン
    checkout: { type: Date, required: true }, // チェックアウト
    duration: { type: Number, required: true }, // 何日間
    recieve_date: { type: Array }, // 予約日
    username: { type: String, required: true }, // お客の名前
    phone: { type: String, required: true }, // 電話番号（連絡先）
    email: { type: String, required: true }, // Emailアドレス
    adult_no: { type: Number }, // 大人
    middle_no: { type: Number }, // 小学生
    child_no: { type: Number }, // 未就学児
    baby_no: { type: Number }, // 幼児
    adult_fee: { type: Number }, // 大人料金
    middle_fee: { type: Number }, // 小学生料金
    child_fee: { type: Number }, // 未就学児料金
    baby_fee: { type: Number }, // 幼児料金
    room: { type: Number, required: true }, // 部屋の数
    rooms: [mongoose.ObjectId], // 部屋番号
    arrival: { type: String }, // 到着時刻
    access: { type: String, required: true }, // 交通手段
    food: { type: String, required: true }, // 食事
    description: { type: String }, // 備考
}, {
    timestamps: true,
});

const Customer = mongoose.model('Customer', customersSchema);

module.exports = Customer;