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
      .post('', this.create)
      .use(Auth0Provider.getAuthorizedUserInfo)
  }

  async getAll(req, res, next) {
    try {
      res.send(await memesService.find(req.query))
    } catch (error) {
      next(error)
    }
  }

  async create(req, res, next) {
    const memeCount = await dbContext.Memes.countDocuments()
    if (memeCount >= 5) {
      next()
    }
    try {
      // NOTE NEVER TRUST THE CLIENT TO ADD THE CREATOR ID
      // req.body.creatorId = req.userInfo.id
      const memeResults = await memesApi.get('')
      const rand = (Math.floor(Math.random() * 100))
      const meme = {
        name: memeResults.data.data.memes[rand].name,
        id: memeResults.data.data.memes[rand].id,
        imgUrl: memeResults.data.data.memes[rand].url
      }
      console.log(rand)
      memesService.create(meme)
      res.send(meme)
    } catch (error) {
      next(error)
    }
  }
}
