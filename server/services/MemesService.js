import { dbContext } from '../db/DbContext'
import { BadRequest } from '../utils/Errors'
import { memesApi } from './AxiosService.js'

class MemesService {
  async find(query = {}) {
    try {
      return await dbContext.Memes.find(query)
    } catch (err) {
      console.error(err)
    }
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
}

export const memesService = new MemesService()
