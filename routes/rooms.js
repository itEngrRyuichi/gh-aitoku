const router = require('express').Router();
let Room = require('../models/rooms.model');

router.route('/').get((req, res) => {
    Room.find()
    .then(room => res.json(room))
    .catch(err => res.status(400).json('Error: ' + err));
});

// capacity of four and sort by priority number
router.route('/priorityFour').get((req, res) => {
    Room.find({ capacity: { $eq: 4 } }).sort( { priority:1 } )
    .then(room => res.json(room))
    .catch(err => res.status(400).json('Error: ' + err));
});

// capacity of five and sort by priority number
router.route('/priorityFive').get((req, res) => {
    Room.find({ capacity: { $eq: 5 } }).sort( { priority:1 } )
    .then(room => res.json(room))
    .catch(err => res.status(400).json('Error: ' + err));
});

// capacity of two and sort by priority number
router.route('/priorityTwo').get((req, res) => {
    Room.find({ capacity: { $eq: 2 } }).sort( { priority:1 } )
    .then(room => res.json(room))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
    const title = req.body.title;
    const capacity = Number(req.body.capacity);
    const priority = Number(req.body.priority);
    

    const newRoom = new Room({
        title,
        capacity,
        priority,
  });

  newRoom.save()
  .then(() => res.json('Room added!'))
  .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
  Room.findById(req.params.id)
    .then(room => res.json(room))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
  Room.findByIdAndDelete(req.params.id)
    .then(() => res.json('Room deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
  Room.findById(req.params.id)
    .then(room => {
        room.title = req.body.title;
        room.capacity = Number(req.body.capacity);
        room.priority = Number(req.body.priority);

      room.save()
        .then(() => res.json('Room updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/changetoup').post((req, res) => {

    // 選択した部屋
    Room.findOne( { priority: { $in: req.body.priority } } )
    .then(room => {
        room.priority = req.body.priority - 1;

        room.save()
            .then(() => res.json('Room moved to up!'))
            .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/movedtodown/:id').post((req, res) => {

    // 選択した部屋
    Room.findById(req.params.id)
    .then(room => {
        room.priority = req.body.priority + 1;

        room.save()
            .then(() => res.json('Room moved to up!'))
            .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/changetodown').post((req, res) => {

    // 選択した部屋
    Room.findOne( { priority: { $in: req.body.priority } } )
    .then(room => {
        room.priority = req.body.priority + 1;

        room.save()
            .then(() => res.json('Room moved to down!'))
            .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/movedtoup/:id').post((req, res) => {

    // 選択した部屋
    Room.findById(req.params.id)
    .then(room => {
        room.priority = req.body.priority - 1;

        room.save()
            .then(() => res.json('Room moved to up!'))
            .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;