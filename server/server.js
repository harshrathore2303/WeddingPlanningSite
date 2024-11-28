const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const authRoutes = require('./routes/auth');
const userRoutes = require('./routes/user');
const guestlistRoutes = require('./routes/guestlist');
const eventRoutes = require('./routes/event');
const checklistRoutes = require('./routes/checklist');
const budgetRoutes = require('./routes/budget');

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://localhost/wedding_planner');

// Routes
app.use('/auth', authRoutes);
app.use('/users', userRoutes);
app.use('/guestlists', guestlistRoutes);
app.use('/events', eventRoutes);
app.use('/checklists', checklistRoutes);
app.use('/budget', budgetRoutes);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server running on port ${port}`));

