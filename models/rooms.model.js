const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const roomsSchema = new Schema({
    title: { type: String, required: true }, // 名前　例)303, 305など
    capacity: { type: Number, required: true }, // 何人は入れるか
    priority: { type: Number, required: true }, // 優先順
},{
    timestamps: true,
});

const Room = mongoose.model('Room', roomsSchema);

module.exports = Room;