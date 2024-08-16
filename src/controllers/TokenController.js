import jwt from 'jsonwebtoken';
import User from '../models/User';

class TokenController {
  async create(req, res) {
    const { email, password } = req.body;

    console.log('Esses sao o email e a password recebido: ');
    console.log(email, password);

    if (!email || !password) {
      return res.status(401).json({
        errors: ['Credentials are not valid.'],
      });
    }

    const user = await User.findOne({ where: { email } });

    if (!user) {
      return res.status(401).json({
        errors: ['User does not exist.'],
      });
    }

    if (!user.isPasswordValid) {
      return res.status(401).json({
        errors: ['Password does not match.'],
      });
    }

    const { id } = user;
    const token = jwt.sign({ id, email }, process.env.TOKEN_SECRET, {
      expiresIn: process.env.TOKEN_EXPIRATION,
    });

    return res.status(200).json({ token, user: { name: user.name, id, email } });
  }
}

export default new TokenController();
