const express = require('express');
const router = express.Router();
const eventController = require('../controllers/eventController');
const auth = require('../middleware/auth');

router.post('/', auth, eventController.createEvent);
router.delete('/:id', auth, eventController.deleteEvent);
router.get('/', auth, eventController.getAllEvents);

module.exports = router;

