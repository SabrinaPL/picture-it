/**
 * @file API version 1 router.
 * @module routes/router
 * @author Mats Loock & Sabrina Prichard-Lybeck <sp223kz@student.lnu.se>
 * @version 3.0.0
 */

import express from 'express'
import { router as accountRouter } from './accountRouter.js'
import { router as userRouter } from './userRouter.js'

export const router = express.Router()

// Add documentation to the message object.
// Which endpoints are available?
// Which methods can I use? 
// What is the expected result?
router.get('./', (req, res) => res.json({ message: 'Hooray! Welcome to version 1 of this very simple RESTful API!' }))
router.use('./', accountRouter)
