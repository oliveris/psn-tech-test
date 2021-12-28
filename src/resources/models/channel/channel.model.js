import mongoose from 'mongoose'

const channelSchema = new mongoose.Schema(
  {
    channel_name: {
      type: String,
      default: null,
      trim: true,
      maxlength: 45
    }
  },
  { timestamps: false }
)

export const Channel = mongoose.model('channel', channelSchema)
