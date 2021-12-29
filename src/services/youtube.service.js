import config from '../config'
import { google } from 'googleapis'

// Connect to the Google YouTube Data API v3 to obtain videos from the following
// YouTube channels ['GlobalCyclingNetwork', 'globalmtb']
const youTube = google.youtube({
  version: 'v3',
  auth: config.secrets.youtubeApiKey
})

/**
 * Obtains a channel ID from the passed channel string
 *
 * @param {string} channelName
 *
 * @returns {string}
 */
async function obtainChannelId(channelName) {
  const res = await youTube.channels.list({
    part: 'contentDetails',
    forUsername: channelName
  })

  var found = res.data.items

  return found.length === 0 ? '' : found[0].id
}

/**
 * Obtains a YouTube channel ID by their name
 *
 * @param {string} channelId
 * @param {array}  filter
 *
 * @returns {array}
 */
async function searchVideos(channelId, filter = []) {
  // Define an empty videos array
  const videos = []

  // Loop through the filter of keywords
  for (const keyWord of filter) {
    // Obtain videos based on keyword filter
    const res = await youTube.search.list({
      channelId: channelId,
      type: 'video',
      part: 'snippet',
      q: keyWord
    })

    // Push found items into videos array
    videos.push(...res.data.items)
  }

  return videos
}

/**
 * Obtains the videos for a given channel
 *
 * @param {string} channelName
 * @param {array}  filter
 *
 * @returns {array}
 */
const getVideosForChannel = async (channelName, filter) => {
  // Obtain the channels ID for the provided channel name
  const channelId = await obtainChannelId(channelName)

  // Obtain the videos for the channel filtered by the serach query
  const videos = await searchVideos(channelId, filter)

  return videos
}

module.exports = { getVideosForChannel }
