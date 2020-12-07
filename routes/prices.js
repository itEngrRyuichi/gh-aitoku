const router = require('express').Router();
let Price = require('../models/prices.model');

router.route('/').get((req, res) => {
    Price.find()
    .then(price => res.json(price))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
    const title = req.body.title;
    const amount = Number(req.body.amount);

    const newPrice = new Price({
        title,
        amount,
  });

  newPrice.save()
  .then(() => res.json('Price added!'))
  .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
  Price.findById(req.params.id)
    .then(price => res.json(price))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
  Price.findByIdAndDelete(req.params.id)
    .then(() => res.json('Price deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
  Price.findById(req.params.id)
    .then(price => {
        price.title = req.body.title;
        price.amount = Number(req.body.amount);

      price.save()
        .then(() => res.json('Price updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;