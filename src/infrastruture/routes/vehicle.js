import { Router} from 'express';
import makeCallback from '../express-callback'
import { getAll, getById, post, put, del} from '../controllers/vehicle' 

const router = Router();

router.route('/')
    .get(makeCallback(getAll))
    .post(makeCallback(post));

router.route('/:id')
    .get(makeCallback(getById))
    .put(makeCallback(put))
    .delete(makeCallback(del));


module.exports = router;