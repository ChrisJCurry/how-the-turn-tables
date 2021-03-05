import mongoose from 'mongoose'
import ValueSchema from '../models/Value'
import AccountSchema from '../models/Account'
import MemeSchema from '../models/Meme'
import QuoteSchema from '../models/Quote'

class DbContext {
  Values = mongoose.model('Value', ValueSchema);
  Account = mongoose.model('Account', AccountSchema);

  Memes = mongoose.model('Meme', MemeSchema)
  Quotes = mongoose.model('Quote', QuoteSchema)
}

export const dbContext = new DbContext()
