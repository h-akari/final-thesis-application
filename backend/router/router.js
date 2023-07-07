const express = require('express')
const router = express.Router()
const { getWords, setWords, updateWords, deleteWords } = require('../controllers/controller')

/*:
You can clean codes more than below
router.route('/').get(getWords).post(setWords)
router.route('/:id').put(updateWords).delete(deleteWords)
*/

router.get('/test/:word', getWords)
router.post('/', setWords)

router.put('/:id', updateWords)
router.delete('/:id', deleteWords)


module.exports = router