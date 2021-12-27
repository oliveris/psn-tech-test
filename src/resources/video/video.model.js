import mongoose from 'mongoose'

const videoSchema = new mongoose.Schema({}, { timestamps: true })

videoSchema.index({}, { unique: true })

export const Video = mongoose.model('video', videoSchema)
