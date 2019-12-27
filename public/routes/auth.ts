import { Router, Response, Request } from 'express';
import User from '../models/User';
import bcrypt from 'bcrypt';
import { check, validationResult } from 'express-validator';
import jwt from 'jsonwebtoken';
import config from 'config';

// /api/auth/

const router = Router();
router.post(
  '/register',
  [
    check('email', 'Invalid email'),
    check('password', 'Minimum 6 symbols length').isLength({ min: 6 }),
  ],
  async (req: Request, res: Response) => {
    try {
      const errors = validationResult(req);

      if (!errors.isEmpty()) {
        return res.status(400).json({
          errors: errors.array(),
          message: 'Invalid data during registration',
        });
      }
      const { email, password } = req.body;
      const userExist = await User.findOne({ email });

      if (userExist) {
        return res.status(400).json({ message: 'The user is already registered' });
      }

      const encryptedPassword = await bcrypt.hash(password, 12);
      const user = new User({ email, password: encryptedPassword });

      await user.save();

      return res.status(201).json({ message: 'The user has been created' });
    } catch (error) {
      return res.status(500).json({ message: 'Internal server error' });
    }
  }
);

router.post(
  '/login',
  [
    check('email', 'Please enter valid email')
      .normalizeEmail()
      .isEmail(),
    check('password', 'Enter the password')
      .isLength({ min: 6 })
      .exists(),
  ],
  async (req: Request, res: Response) => {
    try {
      const errors = validationResult(req);

      if (!errors.isEmpty()) {
        return res.status(400).json({
          errors: errors.array(),
          message: 'Invalid data during login',
        });
      }
      const { email, password } = req.body;
      const user = await User.findOne({ email });

      if (!user) {
        return res.status(400).json({ message: 'The user was not found' });
      }

      const isMatch = bcrypt.compare(password, user.password);
      if (!isMatch) {
        return res.status(400).json({
          message: 'Invalid data',
        });
      }

      const token = jwt.sign({ userId: user.id }, config.get('jwtSecret'), { expiresIn: '1h' });

      return res.status(200).json({ token, userId: user.id });
    } catch (error) {
      return res.status(500).json({ message: 'Internal server error' });
    }
  }
);

export default router;
