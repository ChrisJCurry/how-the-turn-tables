import { ProxyState } from '../AppState.js'
import MemeCard from '../Models/MemeCard.js'
import { api } from './AxiosService.js'

class MemeCardsService {
  async comments(memeId, rawComment) {
    console.log(memeId, rawComment.content)
    const parentMeme = ProxyState.meme.find(c => c.id === memeId)
    console.log(parentMeme)
    parentMeme.comments.push({ content: rawComment.content })
    try {
      const res = await api.put('api/memes/' + memeId + '/comments', parentMeme)

      ProxyState.meme = ProxyState.meme
    } catch (error) {
      console.error(error)
    }
  }

  async thumbsUp(quoteId, memeId) {
    const meme = ProxyState.meme.find(m => m.id === memeId)
    // meme.quotes[id].votes += 1
    const quote = meme.quotes.find(q => q.id === quoteId)
    quote.vote++
    try {
      const res = await api.put('api/memes/' + memeId + '/quotes', meme)
      ProxyState.meme = ProxyState.meme
    } catch (error) {
      console.error(error)
    }
  }

  constructor() {

  }

  async find(query = {}) {
    const res = await api.get('api/memes')
    console.log(res)
    ProxyState.meme = res.data.map(m => new MemeCard(m))
  }
}

export const memeCardsService = new MemeCardsService()
