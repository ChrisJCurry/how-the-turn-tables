import { dbContext } from '../db/DbContext'
import { BadRequest } from '../utils/Errors'

class QuotesService {
  async find(query = {}) {
    try {
      return await dbContext.Quotes.find(query)
    } catch (err) {
      console.error(err)
    }
  }

  async findById(id) {
    const quote = await dbContext.Quotes.findById(id)
    if (!quote) {
      throw new BadRequest('Invalid Id')
    }
    return quote
  }

  async create(parentMemeId) {
    try {
      // NOTE NEVER TRUST THE CLIENT TO ADD THE CREATOR ID
      // req.body.creatorId = req.userInfo.id
      const quoteResults = await officeApi.get('quotes/random')
      if (this.checkDupes(quoteResults.data.data.id)) {
        this.create(parentMemeId)
        return
      }
      const quote = {
        content: quoteResults.data.data.content,
        id: quoteResults.data.data._id,
        memeId: parentMemeId,
        vote: 0
      }
      return await dbContext.Quotes.create(quote)
    } catch (error) {
      console.error(error)
    }
  }
}
// return await dbContext.Quotes.create(quote)

export const quotesService = new QuotesService()
