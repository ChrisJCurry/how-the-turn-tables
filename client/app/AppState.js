import MemeCard from './Models/MemeCard.js'
//import MemeQuotes from'./Models/MemeQuotes.js'
import { EventEmitter } from './Utils/EventEmitter.js'
import { isValidProp } from './Utils/isValidProp.js'

class AppState extends EventEmitter {
  user = {}
  account = {}
  meme = []
  //memeQuotes = []

  // meme = [new MemeCard("title", "imgUrl")]

  // quotes = [new MemeQuotes("quote")]
}

export const ProxyState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})
