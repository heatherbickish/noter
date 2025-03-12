import { logger } from "@/utils/Logger.js"
import { api } from "./AxiosService.js"

class NotebooksService {


  async getAllMyNotebooks() {
    const response = await api.get('api/notebooks')
    logger.log('Got notebooks', response.data)
  }

}

export const notesbooksService = new NotebooksService()