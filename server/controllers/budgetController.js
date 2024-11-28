exports.addBudgetItem = async (req, res) => {
  try {
    req.user.budget.push(req.body);
    await req.user.save();
    res.status(201).send(req.user.budget[req.user.budget.length - 1]);
  } catch (error) {
    res.status(400).send(error);
  }
};

exports.deleteBudgetItem = async (req, res) => {
  try {
    req.user.budget = req.user.budget.filter(item => 
      item._id.toString() !== req.params.id
    );
    await req.user.save();
    res.send({ message: 'Budget item deleted' });
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.getAllBudgetItems = async (req, res) => {
  try {
    res.send(req.user.budget);
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.updateBudgetItem = async (req, res) => {
  try {
    const item = req.user.budget.find(item => item._id.toString() === req.params.id);
    if (item) {
      item.checked = req.body.checked;
      await req.user.save();
      res.status(200).send(item);
    } else {
      res.status(404).send({ message: 'Budget item not found' });
    }
  } catch (error) {
    res.status(500).send(error);
  }
};