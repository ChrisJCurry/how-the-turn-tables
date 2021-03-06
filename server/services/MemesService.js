import { dbContext } from '../db/DbContext'
import { BadRequest } from '../utils/Errors'
import { officeApi } from '../services/AxiosService'
// import { memesApi } from './AxiosService.js'

class MemesService {
  async find(query = {}) {
    try {
      return await dbContext.Memes.find(query)
    } catch (err) {
      console.error(err)
    }
  }

  async voteForQuote(parentMemeId, body) {
    return await dbContext.Memes.findByIdAndUpdate(parentMemeId, body, { new: true })
  }

  async findById(id) {
    const meme = await dbContext.Memes.findById(id)
    if (!meme) {
      throw new BadRequest('Invalid Id')
    }
    return meme
  }

  async create(meme) {
    return await dbContext.Memes.create(meme)
  }

  async createQuotes() {
    try {
      // NOTE NEVER TRUST THE CLIENT TO ADD THE CREATOR ID
      // req.body.creatorId = req.userInfo.id
      const quoteResults = await officeApi.get('quotes/random')
      // if (this.checkDupes(quoteResults.data.data._id)) {
      //   this.create(parentMemeId)
      //   return
      // }
      const quote = {
        content: quoteResults.data.data.content,
        vote: 0
      }
      return quote
    } catch (error) {
      console.error(error)
    }
  }
}

export const memesService = new MemesService()
