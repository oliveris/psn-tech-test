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

    test('date', () => {
      const date = Video.schema.obj.date
      expect(date).toEqual({
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
