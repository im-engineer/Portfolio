import  express from 'express';
const router = express.Router();
import {contact} from '../controller/contactController'

router.post("/to/admin",contact);
export default router;