import { Channel } from '../channel/channel.model'

describe('Channel model', () => {
  describe('schema', () => {
    test('channel_name', () => {
      const channelName = Channel.schema.obj.channel_name
      expect(channelName).toEqual({
        type: String,
        default: null,
        trim: true,
        maxlength: 45
      })
    })
  })
})
