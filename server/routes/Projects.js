const router = require('express').Router();
let Project = require('../Models/projects.model');

router.route('/').get((req, res) => {
    console.log('[+] Fetching the all the project details');
    Project.find()
        .then(projects => res.json(projects))
        .catch(err => res.status(404).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
    const newProject = new Project(req.body);
    newProject.save()
        .then(() => res.json('Project Added'))
        .catch(() => res.status(404).json('Error: ' + err))

});

router.route('/:id').get((req, res) => {
    console.log('[+] Fetching details for ID = ' + req.params.id);
    Project.findById(req.params.id)
        .then(projects => res.json(projects))
        .catch(err => res.status(404).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
    console.log('[+] Fetching the project of id: ' + req.params.id + ' for deleting');
    Project.findByIdAndDelete(req.params.id)
        .then(projects => res.json('Project deleted'))
        .catch(err => res.status(404).json('Error: ' + err));
});


router.route('/update/:id').post((req, res) => {
    console.log('[+] Fetching the project of id: ' + req.params.id + ' for updating');
    Project.findByIdAndDelete(req.params.id)
        .then(projects => {
            const newProject = new Project(req.body);
            newProject.save()
                .then(() => res.json('Project Updated'))
                .catch(() => res.status(404).json('Error: ' + err))
        })
        .catch(err => res.status(404).json('Error: ' + err));
});

module.exports = router;