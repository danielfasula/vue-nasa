import { AppState } from '../AppState'
import { marsApi } from './AxiosService'

class MarsService {
  async searchMars(query) {
    try {
      const res = await marsApi.get('photos?sol=1000&api_key=OXglUtK0xhM1jyH0EfMbN5A2CTFqGjFqrne4534Q&date=' + query)
      AppState.mars = res.data.photos[Math.floor(Math.random() * 10)]
      console.log(AppState.mars)
    } catch (error) {
      console.error(error)
    }
  }
}

export const marsService = new MarsService()
