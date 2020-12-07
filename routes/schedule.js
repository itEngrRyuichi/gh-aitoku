const router = require('express').Router();
let Customer = require('../models/customers.model');
let Room = require('../models/rooms.model');

router.route('/').get((req, res) => {

    Customer
    .find()
    .populate({
        path: 'rooms',
        model: Room
    })
    .then(customers => res.json(customers))
    .catch(err => res.status(400).json('Error: ' + err));
  });

router.route('/getReservedRooms').get((req, res) => {
    const checkin = Date.parse(req.query.checkin);
    const checkout = Date.parse(req.query.checkout);
    // for duration
    const msDiff = new Date(checkout).getTime() - new Date(checkin).getTime();
    const duration = Math.floor(msDiff / (1000 * 60 * 60 * 24));

    // for reserved dates
    const recieve_date = [];
    for (let i = 0; i < duration + 1; i++) {
      var result = new Date(req.query.checkin);
      recieve_date.push(new Date(result.setDate(result.getDate() + i)));
    }

    Customer
    .find({ 
        recieve_date: { $in: recieve_date }
    })
    .populate({
        path: 'rooms',
        model: Room
    })
    .sort( { checkin:1 } )
    .then(customers => res.json(customers))
    .catch(err => res.status(400).json('Error: ' + err));
  });

router.route('/availRooms').get((req, res) => {
    // const reserveRooms = ['5fae1000402b284fdc1321a0', '5fae102c402b284fdc1321a1'];
    const reserveRooms = req.query.reserveRooms;
    const capacity = req.query.capacity;
    const room = req.query.room;
    console.log(reserveRooms, capacity, room);
    Room
    .find({
        $and: [
            { capacity: { $eq: capacity } },
            { _id: { $nin: reserveRooms } }
        ]
    })
    .sort({ priority:1 })
    .limit(room)
    .then(room => res.json(room))
    .catch(err => res.status(400).json('Error: ' + err));
});

// capacity of four and sort by priority number
router.route('/availCapa4Rooms').get((req, res) => {
    const reservedRoom = ['5fae1000402b284fdc1321a0', '5fae102c402b284fdc1321a1'];
    const requestCapacity = 4;
    Room
    .find({
        $and: [
            { capacity: { $eq: requestCapacity } },
            { _id: { $nin: reservedRoom } }
        ]
    })
    .sort({ priority:1 })
    .then(room => res.json(room))
    .catch(err => res.status(400).json('Error: ' + err));
});

// capacity of five and sort by priority number
router.route('/availCapa5Rooms').get((req, res) => {
    const reservedRoom = ['5fae1000402b284fdc1321a0', '5fae102c402b284fdc1321a1'];
    const requestCapacity = 5;
    Room
    .find({
        $and: [
            { capacity: { $eq: requestCapacity } },
            { _id: { $nin: reservedRoom } }
        ]
    })
    .sort({ priority:1 })
    .then(room => res.json(room))
    .catch(err => res.status(400).json('Error: ' + err));
});

// capacity of two and sort by priority number
router.route('/availCapa2Rooms').get((req, res) => {
    const reservedRoom = ['5fae1000402b284fdc1321a0', '5fae102c402b284fdc1321a1'];
    const requestCapacity = 2;
    Room
    .find({
        $and: [
            { capacity: { $eq: requestCapacity } },
            { _id: { $nin: reservedRoom } }
        ]
    })
    .sort({ priority:1 })
    .then(room => res.json(room))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;