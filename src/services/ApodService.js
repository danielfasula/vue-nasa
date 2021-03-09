import { AppState } from '../AppState'
import { nasaApi } from './AxiosService'

class ApodService {
  async searchApod(query) {
    try {
      const res = await nasaApi.get('apod?api_key=OXglUtK0xhM1jyH0EfMbN5A2CTFqGjFqrne4534Q&date=' + query)
      AppState.apod = res.data
    } catch (error) {
      console.error(error)
    }
  }
}

export const apodService = new ApodService()
