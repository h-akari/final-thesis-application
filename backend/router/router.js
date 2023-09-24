const express = require('express')
const router = express.Router()
const { gettingListReq, easyWordReq, getWords } = require('../controllers/controller')

/*
You can clean codes more than below
router.route('/').get(getWords).post(setWords)
router.route('/:id').put(updateWords).delete(deleteWords)
*/


router.get('/gettingListReq', gettingListReq)
router.post('/easyWordReq/:word', easyWordReq )
router.get('/test/:word',getWords)

// router.put('/:id', updateWords)
// router.delete('/:id', deleteWords)


module.exports = router