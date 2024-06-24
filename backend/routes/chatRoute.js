import { Router } from "express";
import {getFitnessResponse} from "../controllers/chatApi"

const router = new Router();

router.post('/message', getFitnessResponse);



export default router;