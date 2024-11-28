exports.createEvent = async (req, res) => {
  try {
    req.user.events.push(req.body);
    await req.user.save();
    res.status(201).send(req.user.events[req.user.events.length - 1]);
  } catch (error) {
    res.status(400).send(error);
  }
};

exports.deleteEvent = async (req, res) => {
  try {
    req.user.events = req.user.events.filter(e => 
      e._id.toString() !== req.params.id
    );
    await req.user.save();
    res.send({ message: 'Event deleted' });
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.getAllEvents = async (req, res) => {
  try {
    res.send(req.user.events);
  } catch (error) {
    res.status(500).send(error);
  }
};

