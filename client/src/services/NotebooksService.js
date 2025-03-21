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
    const createdNotebook = new Notebook(response.data)
    AppState.notebooks.unshift(createdNotebook)
  }

  async editNotebook(notebookData, notebookId) {
    const response = await api.put(`api/notebooks/${notebookId}`, notebookData)
    AppState.activeNotebook = new Notebook(response.data)
  }

  async deleteNotebook(notebookId) {
    const response = await api.delete(`api/notebooks/${notebookId}`)
    const notebookIndex = AppState.notebooks.findIndex(notebook => notebook.id == notebookId)
    AppState.notebooks.splice(notebookIndex, 1)
  }

}

export const notesbooksService = new NotebooksService()