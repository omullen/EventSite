import express from 'express'
import asyncHandler from 'express-async-handler'
import Event from '../models/eventModel.js'
import { getEvents, getEventById} from '../controllers/eventController.js'


const router = express.Router()

// @desc    Fetch all events
// @route   GET /api/events/
// @access  public

router.get('/', getEvents)

// @desc    Fetch single event by id
// @route   GET /api/events/:id
// @access  public

router.get('/:id', getEventById)

export default router