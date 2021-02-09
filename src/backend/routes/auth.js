const router = require('express').Router();

router.post('/reguster', (req, res) => {
    res.send('Register')
})

module.export = router;