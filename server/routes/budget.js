const express = require('express');
const router = express.Router();
const budgetController = require('../controllers/budgetController');
const auth = require('../middleware/auth');

router.post('/', auth, budgetController.addBudgetItem);
router.delete('/:id', auth, budgetController.deleteBudgetItem);
router.get('/', auth, budgetController.getAllBudgetItems);
router.patch('/:id', auth, budgetController.updateBudgetItem);

module.exports = router;

