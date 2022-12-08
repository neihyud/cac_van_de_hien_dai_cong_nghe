const express = require('express')
const router = express.Router()

const homeController = require('../controller/home.controller')


router.get('/', homeController.searchBookName)
router.get('/author', homeController.authorBooks)
router.get('/author-detail', homeController.authorDetails)
router.get('/history', homeController.getHistory)
router.post('/history', homeController.getHistory)
module.exports = router