exports.createGuestlist = async (req, res) => {
  try {
    req.user.guestlists.push(req.body);
    await req.user.save();
    res.status(201).send(req.user.guestlists[req.user.guestlists.length - 1]);
  } catch (error) {
    res.status(400).send(error);
  }
};

exports.deleteGuestlist = async (req, res) => {
  try {
    req.user.guestlists = req.user.guestlists.filter(gl => 
      gl._id.toString() !== req.params.id
    );
    await req.user.save();
    res.send({ message: 'Guestlist deleted' });
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.addGuest = async (req, res) => {
  try {
    const guestlist = req.user.guestlists.id(req.params.id);
    guestlist.guests.push(req.body);
    await req.user.save();
    res.status(201).send(guestlist.guests[guestlist.guests.length - 1]);
  } catch (error) {
    res.status(400).send(error);
  }
};

exports.deleteGuest = async (req, res) => {
  try {
    const guestlist = req.user.guestlists.id(req.params.guestlistId);
    guestlist.guests = guestlist.guests.filter(g => 
      g._id.toString() !== req.params.guestId
    );
    await req.user.save();
    res.send({ message: 'Guest deleted' });
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.getAllGuestlists = async (req, res) => {
  try {
    res.send(req.user.guestlists);
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.getGuestsFromGuestlist = async (req, res) => {
  try {
    const guestlist = req.user.guestlists.id(req.params.id);
    if (!guestlist) {
      return res.status(404).send({ error: 'Guestlist not found' });
    }
    res.send(guestlist.guests);
  } catch (error) {
    res.status(500).send(error);
  }
};

