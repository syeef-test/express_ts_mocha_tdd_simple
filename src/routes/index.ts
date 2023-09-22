import { Router, Request, Response } from "express";

import auth from './auth';
import dashboard from './dashboard';

const router = Router();

router.use("/auth", auth);
router.use("/dashboard", auth);

export default router;