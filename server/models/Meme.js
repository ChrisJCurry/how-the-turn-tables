import mongoose from 'mongoose'
const Schema = mongoose.Schema
const Quote = new Schema({
  content: { type: String, required: true },
  vote: { type: Number, required: true }
},
{ timestamps: true, toJSON: { virtuals: true } })
const Meme = new Schema(
  {
    name: { type: String, required: true },
    imgUrl: { type: String, required: true },
    quotes: [
      Quote
    ]
  },
  { timestamps: true, toJSON: { virtuals: true } }
)

export default Meme
