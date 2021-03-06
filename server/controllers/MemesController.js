import BaseController from '../utils/BaseController'
import { Auth0Provider } from '@bcwdev/auth0provider'
import { memesService } from '../services/MemesService'
import { memesApi } from '../services/AxiosService'
import { dbContext } from '../db/DbContext'
export class MemesController extends BaseController {
  constructor() {
    super('api/memes')
    this.router
    // NOTE: Beyond this point all routes require Authorization tokens (the user must be logged in)
      .get('', this.getAll)
      .use(Auth0Provider.getAuthorizedUserInfo)
      .get('/:id', this.getOneMeme)
      .post('', this.create)
      .put('/:memeId/quotes/', this.voteForQuote)
      .put('/:memeId/comments', this.postComment)
  }

  async getAll(req, res, next) {
    try {
      res.send(await memesService.find(req.query))
    } catch (error) {
      next(error)
    }
  }

  async postComment(req, res, next) {
    res.send(await memesService.postComment(req.params.memeId, req.body))
  }

  async getOneMeme(req, res, next) {
    try {
      res.send(await memesService.findById(req.params.id))
    } catch (err) {
      next(err)
    }
  }

  async voteForQuote(req, res, next) {
    try {
      res.send(memesService.voteForQuote(req.params.memeId, req.body))
    } catch (err) {
      console.error(err)
    }
  }

  async create(req, res, next) {
    const memeCount = await dbContext.Memes.countDocuments()
    if (memeCount >= 5000) {
      next()
      return
    }
    try {
      // NOTE NEVER TRUST THE CLIENT TO ADD THE CREATOR ID
      // req.body.creatorId = req.userInfo.id
      const memeResults = await memesApi.get('')
      const rand = (Math.floor(Math.random() * 100))
      const addQuotes = []
      for (let i = 0; i < 4; i++) {
        addQuotes.push(await memesService.createQuotes())
      }
      const meme = {
        name: memeResults.data.data.memes[rand].name,
        imgUrl: memeResults.data.data.memes[rand].url,
        quotes: addQuotes
      }
      memesService.create(meme)
      res.send(meme)
    } catch (error) {
      next(error)
    }
  }
}
