import mongoose from 'mongoose'

const videoSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      default: null,
      trim: true,
      maxlength: 100
    },
    publishedAt: {
      type: Date,
      default: null
    },
    channel: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: 'channel',
      required: true
    }
  },
  { timestamps: false }
)

// Could add an index by channel and title but looks like Youtube allows videos to be uploaded with the same title
// videoSchema.index({ channel: 1, title: 1 }, { unique: true })

export const Video = mongoose.model('video', videoSchema)
