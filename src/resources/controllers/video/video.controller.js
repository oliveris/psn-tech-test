// import { Video } from '../../models/video/video.model'

// GET index many videos
const getMany = (req, res, next) => {
  res.json({ message: 'get many function' })
}

// POST create a video and asign it to a channel (if these do not exist)
const createOne = (req, res, next) => {
  res.json({ message: 'create a video' })
}

// DELETE a video of the channel
const removeOne = (req, res, next) => {
  res.json({ message: 'delete a video' })
}

module.exports = { getMany, createOne, removeOne }
