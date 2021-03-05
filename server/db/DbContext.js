import mongoose from 'mongoose'
import ValueSchema from '../models/Value'
import AccountSchema from '../models/Account'
import MemeSchema from '../models/Meme'

class DbContext {
  Values = mongoose.model('Value', ValueSchema);
  Account = mongoose.model('Account', AccountSchema);

  Memes = mongoose.model('Meme', MemeSchema)
}

export const dbContext = new DbContext()
