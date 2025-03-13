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

  async getEntriesByNotebookId(notebookId) {
    const response = await api.get(`api/notebooks/${notebookId}/entries`)
    AppState.entries = response.data.map(entry => new Entry(entry))
  }

}

export const notesbooksService = new NotebooksService()