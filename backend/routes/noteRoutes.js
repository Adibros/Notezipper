const express = require('express');
const { getNotes } = require('../controllers/noteControllers');

const router = express.Router();

router.route("/").get(getNotes);
// router.route('/create').post()


// router.route('/:id').get().put().delete();



module.exports = router;