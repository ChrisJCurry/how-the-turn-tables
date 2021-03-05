import mongoose from 'mongoose'
const Schema = mongoose.Schema

const Quote = new Schema(
  {
    content: { type: String, required: true },
    id: { type: String, required: true },
    memeId: { type: String, required: true },
    vote: { type: Number, required: true }
  },
  { timestamps: true, toJSON: { virtuals: true } }
)

export default Quote
