import { Router } from 'express';

import studentController from '../controllers/StudentController';
import loginRequired from '../middlewares/loginRequired';

const router = new Router();

router.post('/', loginRequired, studentController.store);
router.get('/', loginRequired, studentController.index);
router.get('/:id', loginRequired, studentController.show);
router.put('/:d', loginRequired, studentController.update);
router.delete('/:d', loginRequired, studentController.delete);

export default router;
