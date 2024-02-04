const express = require('express')
const router = express.Router()
const { gettingListReq, easyWordReq, getWords } = require('../controllers/controller')


router.get('/gettingListReq', gettingListReq)
router.post('/easyWordReq/:word', easyWordReq )
router.get('/test/:word',getWords)

module.exports = router