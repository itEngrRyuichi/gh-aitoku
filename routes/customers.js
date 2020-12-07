const router = require('express').Router();
let Customer = require('../models/customers.model');

//get customers sort by check in
router.route('/').get((req, res) => {
    Customer.find().sort( { checkin:1 } )
    .then(customer => res.json(customer))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
    const checkin = Date.parse(req.body.checkin);
    const checkout = Date.parse(req.body.checkout);
    const username = req.body.username;
    const phone = req.body.phone;
    const email = req.body.email;
    const adult_no = Number(req.body.adult_no);
    const middle_no = Number(req.body.middle_no);
    const child_no = Number(req.body.child_no);
    const baby_no = Number(req.body.baby_no);
    const adult_fee = Number(req.body.adult_fee);
    const middle_fee = Number(req.body.middle_fee);
    const child_fee = Number(req.body.child_fee);
    const baby_fee = Number(req.body.baby_fee);
    const room = Number(req.body.room);
    const rooms = req.body.rooms;
    const arrival = req.body.arrival;
    const access = req.body.access;
    const food = req.body.food;
    const description = req.body.description;

    // for duration
    const msDiff = new Date(checkout).getTime() - new Date(checkin).getTime();
    const duration = Math.floor(msDiff / (1000 * 60 * 60 * 24));

    // for reserved dates
    const recieve_date = [];
    for (let i = 0; i < duration + 1; i++) {
      var result = new Date(req.body.checkin);
      recieve_date.push(new Date(result.setDate(result.getDate() + i)));
    }

  const newCustomer = new Customer({
    checkin,
    checkout,
    duration,
    recieve_date,
    username,
    phone,
    email,
    adult_no,
    middle_no,
    child_no,
    baby_no,
    adult_fee,
    middle_fee,
    child_fee,
    baby_fee,
    room,
    rooms,
    arrival,
    access,
    food,
    description,
  });

  newCustomer.save()
  .then(() => res.json('Customer added!'))
  .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
    Customer.findById(req.params.id)
    .then(customer => res.json(customer))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
    Customer.findByIdAndDelete(req.params.id)
    .then(() => res.json('customer deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
    Customer.findById(req.params.id)
    .then(customer => {
        customer.checkin = Date.parse(req.body.checkin);
        customer.checkout = Date.parse(req.body.checkout);
        customer.username = req.body.username;
        customer.phone = Number(req.body.phone);
        customer.email = req.body.email;
        customer.adult_no = Number(req.body.adult_no);
        customer.middle_no = Number(req.body.middle_no);
        customer.child_no = Number(req.body.child_no);
        customer.baby_no = Number(req.body.baby_no);
        customer.adult_fee = Number(req.body.adult_fee);
        customer.middle_fee = Number(req.body.middle_fee);
        customer.child_fee = Number(req.body.child_fee);
        customer.baby_fee = Number(req.body.baby_fee);
        customer.room = Number(req.body.room);
        customer.rooms = (req.body.rooms);
        customer.arrival = req.body.arrival;
        customer.access = req.body.access;
        customer.food = req.body.food;
        customer.description = req.body.description;

        const checkin = Date.parse(req.body.checkin);
        const checkout = Date.parse(req.body.checkout);
        const msDiff = new Date(checkout).getTime() - new Date(checkin).getTime();
        customer.duration = Math.floor(msDiff / (1000 * 60 * 60 * 24));

        // for reserved dates
        customer.recieve_date = [];
        for (let i = 0; i < duration + 1; i++) {
          var result = new Date(req.body.checkin);
          recieve_date.push(new Date(result.setDate(result.getDate() + i)));
        }


      customer.save()
        .then(() => res.json('Customer updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;