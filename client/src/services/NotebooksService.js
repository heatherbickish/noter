import { logger } from "@/utils/Logger.js"
import { api } from "./AxiosService.js"
import { AppState } from "@/AppState.js"
import { Notebook } from "@/models/Notebook.js"
import { Entry } from "@/models/Entry.js"

class NotebooksService {


  async getAllMyNotebooks() {
    const response = await api.get('api/notebooks')
    AppState.notebooks = response.data.map(notebook => new Notebook(notebook))
  }

  async getNotebookById(notebookId) {
    AppState.activeNotebook = null
    const response = await api.get(`api/notebooks/${notebookId}`)
    AppState.activeNotebook = new Notebook(response.data)
  }

  async createNotebook(formData) {
    const response = await api.post('api/notebooks', formData)
    logger.log('created notebook', response.data)
    const createdNotebook = new Notebook(response.data)
    AppState.notebooks.unshift(createdNotebook)
  }

}

export const notesbooksService = new NotebooksService()