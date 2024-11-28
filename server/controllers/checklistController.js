exports.createChecklist = async (req, res) => {
  try {
    req.user.checklists.push(req.body);
    await req.user.save();
    res.status(201).send(req.user.checklists[req.user.checklists.length - 1]);
  } catch (error) {
    res.status(400).send(error);
  }
};

exports.deleteChecklist = async (req, res) => {
  try {
    req.user.checklists = req.user.checklists.filter(cl => 
      cl._id.toString() !== req.params.id
    );
    await req.user.save();
    res.send({ message: 'Checklist deleted' });
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.addTask = async (req, res) => {
  try {
    const checklist = req.user.checklists.id(req.params.id);
    checklist.tasks.push(req.body);
    await req.user.save();
    res.status(201).send(checklist.tasks[checklist.tasks.length - 1]);
  } catch (error) {
    res.status(400).send(error);
  }
};

exports.deleteTask = async (req, res) => {
  try {
    const checklist = req.user.checklists.id(req.params.checklistId);
    checklist.tasks = checklist.tasks.filter(t => 
      t._id.toString() !== req.params.taskId
    );
    await req.user.save();
    res.send({ message: 'Task deleted' });
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.getAllChecklists = async (req, res) => {
  try {
    res.send(req.user.checklists);
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.updateTask = async (req, res) => {
  try {
    const checklist = req.user.checklists.id(req.params.checklistId);
    const task = checklist.tasks.id(req.params.taskId);
    
    if (!task) {
      return res.status(404).send({ error: 'Task not found' });
    }

    Object.keys(req.body).forEach(update => {
      task[update] = req.body[update];
    });

    await req.user.save();
    res.send(task);
  } catch (error) {
    res.status(400).send(error);
  }
};

