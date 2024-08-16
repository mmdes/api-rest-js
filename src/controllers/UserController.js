import User from '../models/User';

class UserController {
  async index(req, res) {
    try {
      const users = await User.findAll();
      return res.status(200).json(users.map((user) => ({
        id: user.id,
        name: user.name,
        email: user.email,
      })));
    } catch (e) {
      if (e.errors && e.errors.length > 0) {
        return res.status(400).json({
          errors: e.errors.map((err) => err.message),
        });
      } if (e.parent && e.parent.sqlMessage) {
        return res.status(400).json({
          errors: e.parent.sqlMessage,
        });
      }
      return res.status(400).json(null);
    }
  }

  async show(req, res) {
    try {
      const user = await User.findByPk(req.params.id);

      const { id, name, email } = user;
      return res.status(200).json({ id, name, email });
    } catch (e) {
      if (e.errors && e.errors.length > 0) {
        return res.status(400).json({
          errors: e.errors.map((err) => err.message),
        });
      } if (e.parent && e.parent.sqlMessage) {
        return res.status(400).json({
          errors: e.parent.sqlMessage,
        });
      }
      return res.status(400).json(null);
    }
  }

  async store(req, res) {
    try {
      const newUser = await User.create(req.body);
      const { id, nome, email } = newUser;
      return res.json({ id, nome, email });
    } catch (e) {
      if (e.errors && e.errors.length > 0) {
        return res.status(400).json({
          errors: e.errors.map((err) => err.message),
        });
      } if (e.parent && e.parent.sqlMessage) {
        return res.status(400).json({
          errors: e.parent.sqlMessage,
        });
      }
      return res.status(400).json(null);
    }
  }
}

export default new UserController();

/*
  CRUD:

  CREATE/STORE -> POST
  INDEX -> GET
  SHOW -> GET
  UPDATE -> PUT
  DELETE -> DELETE

*/
