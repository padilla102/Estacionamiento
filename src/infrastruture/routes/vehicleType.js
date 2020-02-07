import { Router} from 'express';
import makeCallback from '../express-callback'
import { getAll, post} from '../controllers/vehicleType' 

const router = Router();

router.route('/')
    .get(makeCallback(getAll))
    .post(makeCallback(post));

module.exports = router;