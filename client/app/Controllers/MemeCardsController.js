import { ProxyState } from '../AppState.js'
import { memeCardsService } from '../Services/MemeCardsService.js'

// Private
function _draw() {
  const memeCards = ProxyState.meme
  let template = ''

  memeCards.forEach(memeCard => template += memeCard.Template)
  document.getElementById('meme-card').innerHTML = template
}

// Public
export default class MemeCardsController {
  constructor() {
    ProxyState.on('meme', _draw)
    // _draw()
    this.getAll()
  }

  async getAll() {
    try {
      await memeCardsService.find()
    } catch (error) {
      console.error(error)
    }
  }

  async thumbsUp(quoteId, memeId) {
    memeCardsService.thumbsUp(quoteId, memeId)
  }

  async comments(event, memeId) {
    event.preventDefault()
    const form = event.target
    const rawComment = {
      content: form.content.value
    }
    memeCardsService.comments(memeId, rawComment)
  }
}
