import { AppState } from "@/AppState.js"
import { api } from "./AxiosService.js"
import { Entry } from "@/models/Entry.js"
import { logger } from "@/utils/Logger.js"

class EntriesService {

  async getEntriesByNotebookId(notebookId) {
    const response = await api.get(`api/notebooks/${notebookId}/entries`)
    AppState.entries = response.data.map(entry => new Entry(entry))
  }

  async createEntry(entryData) {
    const response = await api.post('api/entries', entryData)
    logger.log('created entry', response.data)
    const createdEntry = new Entry(response.data)
    AppState.entries.unshift(createdEntry)
  }

}

export const entriesService = new EntriesService()