import { logger } from "@/utils/Logger.js"
import { api } from "./AxiosService.js"
import { AppState } from "@/AppState.js"
import { Notebook } from "@/models/Notebook.js"

class NotebooksService {


  async getAllMyNotebooks() {
    const response = await api.get('api/notebooks')
    logger.log('Got notebooks', response.data)
    AppState.notebooks = response.data.map(notebook => new Notebook(notebook))
  }

}

export const notesbooksService = new NotebooksService()