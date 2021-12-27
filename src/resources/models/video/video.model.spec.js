import { Video } from '../video/video.model'
import mongoose from 'mongoose'

describe('Video model', () => {
  describe('schema', () => {
    test('title', () => {
      const title = Video.schema.obj.title
      expect(title).toEqual({
        type: String,
        default: null,
        trim: true,
        maxlength: 100
      })
    })

    test('publishedAt', () => {
      const publishedAt = Video.schema.obj.publishedAt
      expect(publishedAt).toEqual({
        type: Date,
        default: null
      })
    })

    test('channel', () => {
      const channel = Video.schema.obj.channel
      expect(channel).toEqual({
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'channel',
        required: true
      })
    })
  })
})
