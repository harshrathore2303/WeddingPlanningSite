const express = require('express');
const router = express.Router();
const guestlistController = require('../controllers/guestlistController');
const auth = require('../middleware/auth');

router.post('/', auth, guestlistController.createGuestlist);
router.delete('/:id', auth, guestlistController.deleteGuestlist);
router.post('/:id/guests', auth, guestlistController.addGuest);
router.delete('/:guestlistId/guests/:guestId', auth, guestlistController.deleteGuest);
router.get('/', auth, guestlistController.getAllGuestlists);
router.get('/:id/guests', auth, guestlistController.getGuestsFromGuestlist);

module.exports = router;