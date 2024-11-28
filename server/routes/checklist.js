const express = require('express');
const router = express.Router();
const checklistController = require('../controllers/checklistController');
const auth = require('../middleware/auth');

router.post('/', auth, checklistController.createChecklist);
router.delete('/:id', auth, checklistController.deleteChecklist);
router.post('/:id/tasks', auth, checklistController.addTask);
router.delete('/:checklistId/tasks/:taskId', auth, checklistController.deleteTask);
router.get('/', auth, checklistController.getAllChecklists);
router.patch('/:checklistId/tasks/:taskId', auth, checklistController.updateTask); // New route for updating a task

module.exports = router;

