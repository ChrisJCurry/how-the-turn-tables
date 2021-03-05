import mongoose from 'mongoose'
const Schema = mongoose.Schema

const Meme = new Schema(
  {
    name: { type: String, required: true },
    id: { type: String, required: true },
    imgUrl: { type: String, required: true }
  },
  { timestamps: true, toJSON: { virtuals: true } }
)

export default Meme
