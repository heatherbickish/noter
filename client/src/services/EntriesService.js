import { AppState } from "@/AppState.js"
import { api } from "./AxiosService.js"
import { Entry } from "@/models/Entry.js"

class EntriesService {

  async getEntriesByNotebookId(notebookId) {
    const response = await api.get(`api/notebooks/${notebookId}/entries`)
    AppState.entries = response.data.map(entry => new Entry(entry))
  }


}

export const entriesService = new EntriesService()