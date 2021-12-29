import youtube from '../../../services/youtube.service'
import { Channel } from '../../models/channel/channel.model'
import { Video } from '../../models/video/video.model'

/**
 * GET index many videos
 */
const getMany = async (req, res) => {
  try {
    const videos = await Video.find(req.query)
      .lean()
      .exec()

    res.status(200).json({ data: videos })
  } catch (e) {
    console.error(e)
    res.status(400).end()
  }
}

/**
 * GET index many filtered videos
 */
const getFilteredMany = async (req, res) => {
  console.log('req query', req.query)

  try {
    var videos = await Video.find(req.query)
      .lean()
      .exec()

    videos = videos.map(function(video) {
      return {
        _id: video._id,
        title: video.title
      }
    })

    res.status(200).json({ data: videos })
  } catch (e) {
    console.error(e)
    res.status(400).end()
  }
}

/**
 * POST create a video and asign it to a channel (if these do not exist)
 */
const createMany = async (req, res, next) => {
  // Define filter
  let filter = ['pro', 'matt stephens', '5', 'Mitchelton-Scott', 'Dubai stage']

  // Define the array of channels to store videos of ['globalmtb','GlobalCyclingNetwork']
  let channels = ['globalmtb', 'GlobalCyclingNetwork']

  // Define an empty videos array
  let videos = []

  // Loop through the channels
  for (const channel of channels) {
    const foundVideos = await youtube.getVideosForChannel(channel, filter)

    // Push found items into videos array
    videos.push(foundVideos)
  }

  try {
    // Build the array of unique channels
    const uniqueChannels = buildUniqueChannels(videos)

    // Create the channels
    const createdChannels = await Channel.insertMany(uniqueChannels)

    // Build the array of videos
    const formattedVideos = buildVideos(videos, createdChannels)

    // Create the videos
    const createdVideos = await Video.insertMany(formattedVideos)

    res.status(201).json({ data: createdVideos })
  } catch (e) {
    console.error(e)
    res.status(400).end()
  }
}

/**
 * GET gets a single video by ID
 */
const getOne = async (req, res) => {
  try {
    const video = await Video.findById(req.params.video)
      .lean()
      .exec()

    res.status(200).json({ data: video })
  } catch (e) {
    console.error(e)
    res.status(400).end()
  }
}

/**
 * DELETE a video of the channel
 */
const removeOne = async (req, res) => {
  try {
    const removed = await Video.deleteOne({
      _id: req.params.video
    })

    if (!removed) {
      return res.status(400).end()
    }

    return res.status(204).end()
  } catch (e) {
    console.error(e)
    res.status(400).end()
  }
}

/**
 * Builds the video formatted array
 *
 * @param {array} videos
 * @param {array} createdChannels
 *
 * @returns {array}
 */
function buildVideos(videos, createdChannels) {
  // Define an empty array to store formatted video data
  let formatted = []

  // Loop through the videos and push them into the formatted array
  for (const video of videos) {
    formatted.push({
      title: video.snippet.title,
      date: video.snippet.publishedAt,
      channel: getVideoChannelId(video.snippet.channelTitle, createdChannels)
    })
  }

  return formatted
}

/**
 * Builds an array of formatted objects for the unique channels
 *
 * @param {array} videos
 *
 * @returns array
 */
function buildUniqueChannels(videos) {
  // Define an empty array to store formatted unique channel data
  let formatted = []

  // Filter the array to obtain unique channel names
  const uniqueChannels = videos
    .map(item => item.snippet.channelTitle)
    .filter((value, index, self) => self.indexOf(value) === index)

  // Loop through the unique channels and push them into the formatted array
  for (const channel of uniqueChannels) {
    formatted.push({ channel_name: channel })
  }

  return formatted
}

/**
 * Obtains the video channel title
 *
 * @param {string} channelTitle
 * @param {array} createdChannels
 *
 * @returns {?string}
 */
function getVideoChannelId(channelTitle, createdChannels) {
  var found = createdChannels.filter(function(channel) {
    return channel.channel_name === channelTitle
  })

  return found.length === 0 ? null : found[0]._id
}

module.exports = { getMany, createMany, getOne, removeOne, getFilteredMany }
