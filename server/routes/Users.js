const router = require('express').Router();
let User = require('../Models/users.model');

router.route('/').get((req, res) => {
    console.log('[+] Fetching the all the UserDetails');
    User.find()
        .then(users => {           
            res.json(users)})
        .catch(err => res.status(404).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
    const newUser = new User(req.body);
    newUser.save()
        .then(() => res.json('User Added'))
        .catch(() => res.status(404).json('Error: ' + err))

});

module.exports = router;