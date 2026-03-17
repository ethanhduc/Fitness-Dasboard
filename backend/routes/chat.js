const express = require('express') // import express module to create router
const {
    sendMessage
} = require('../controllers/chatController')

const router = express.Router()

// POST a new message to the chat
router.post('/', sendMessage)

module.exports = router