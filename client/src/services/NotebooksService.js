import { logger } from "@/utils/Logger.js"
import { api } from "./AxiosService.js"
import { AppState } from "@/AppState.js"
import { Notebook } from "@/models/Notebook.js"

class NotebooksService {


  async getAllMyNotebooks() {
    const response = await api.get('api/notebooks')
    AppState.notebooks = response.data.map(notebook => new Notebook(notebook))
  }

  async getNotebookById(notebookId) {
    const response = await api.get(`api/notebooks/${notebookId}`)
    logger.log('Got notebook by id', response.data)
    AppState.activeNotebook = new Notebook(response.data)
  }
}

export const notesbooksService = new NotebooksService()