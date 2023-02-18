const express = require('express');
const router = express.Router();

const movieController = require('../app/controllers/MovieController');

router.post('/handle-form-actions', movieController.handleFormActions);
// router.get(
//     '/create',
//     function (req, res, next) {
//         if (req.query.ve === 'vip') return next();
//         res.status(403).json({ message: 'Access denied' });
//     },
//     movieController.create
// );
router.get('/create', movieController.create);
router.post('/store', movieController.store);

router.get('/:id/edit', movieController.edit);
router.put('/:id', movieController.update);

router.delete('/:id', movieController.destroy);

router.patch('/:id/restore', movieController.restore);
router.delete('/:id/force', movieController.forceDestroy);
router.get('/:slug', movieController.show);
module.exports = router;
