import BaseController from '../utils/BaseController'
import { Auth0Provider } from '@bcwdev/auth0provider'
import { quotesService } from '../services/QuotesService'

export class QuotesController extends BaseController {
  constructor() {
    super('api/quotes')
    this.router
    // NOTE: Beyond this point all routes require Authorization tokens (the user must be logged in)
      .get('', this.getAll)
      .use(Auth0Provider.getAuthorizedUserInfo)
  }

  async getAll(req, res, next) {
    try {
      res.send(await quotesService.find(req.query))
    } catch (error) {
      next(error)
    }
  }
}
