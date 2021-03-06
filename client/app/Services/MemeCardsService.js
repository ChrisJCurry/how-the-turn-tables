import { ProxyState } from "../AppState.js";
import MemeCard from "../Models/MemeCard.js";
import { api } from "./AxiosService.js";

class MemeCardsService {
  async thumbsUp(id) {
    let meme = ProxyState.meme.find(m => m.id === id)
    meme.thumbsUp += 1
    try {
      const res = await api.put('memes/' + id)
      ProxyState.meme = ProxyState.meme
    } catch (error) {

    }
  }
  constructor(){
    //this.postMemes()
  }
  async find(query = {}) {
    let res = await api.get("api/memes")
    console.log(res)
    ProxyState.meme = res.data.map(m=> new MemeCard(m))

  }
  // async postMemes(){
  //   try {
  //     const res = await api.post("meme", )
  //     ProxyState.meme = [...ProxyState.meme, new MemeCard(res.data)]
  //   } catch (error) {
  //     console.error(error)
  //   }
  // }

  // addMeme(memeTitle) {
  //   // ProxyState.memeCards = [...ProxyState.memeCards, new Memecard({ title: Math.random() })]
  //   let meme = ProxyState.meme.find(i=>i.title == memeTitle)
  // }
}

export const memeCardsService = new MemeCardsService();

