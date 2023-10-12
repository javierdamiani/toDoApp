module.exports = (app) => {
  const Users = app.db.models.Users;

  app.route('/users').get((req, res) => {
    Users.findAll({})
      .then((result) => res.json(result))
      .catch((error) => {
        res.status(412).json({ msg: error.message });
      });
  });

  app.get('/users/:id', (req, res) => {
    Users.findByPk(req.params.id, {
      attributes: ['id', 'name', 'email'],
    })
      .then((result) => res.json(result))
      .catch((error) => {
        res.status(412).json({ msg: error.message });
      });
  });

  app.post('/signup', (req, res) => {
    const { name, email, password } = req.body;
    Users.create(req.body)
      .then((result) => res.json(result))
      .catch((error) => {
        res.status(412).json({ msg: error.message });
      });
  });

  app.delete('/users/:id', (req, res) => {
    Users.destroy({ where: { id: req.params.id } })
      .then((result) => res.sendStatus(204))
      .catch((error) => {
        res.status(412).json({ msg: error.message });
      });
  });
};
