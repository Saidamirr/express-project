import Router from 'express'
import controller from './post-controller.js'

const router = new Router()

router.post('/posts', controller.create)
router.get('/posts', controller.getAll)
router.get('/posts/:id', controller.getOne)
router.put('/posts', controller.update)
router.delete('/posts/:id', controller.delete )

export default router;