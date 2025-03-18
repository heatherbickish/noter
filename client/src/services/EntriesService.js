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
    const createdEntry = new Entry(response.data)
    AppState.entries.unshift(createdEntry)
  }

  async editEntry(entryData, entryId) {
    const response = await api.put(`api/entries/${entryId}`, entryData)
    logger.log('edited entry', response.data)
    AppState.entries = new Entry(response.data)
  }

  async deleteEntry(entryId) {
    const response = await api.delete(`api/entries/${entryId}`)
    logger.log('deleted entry', response.data)
    const entryIndex = AppState.entries.findIndex(entry => entry.id == entryId)
    AppState.entries.splice(entryIndex, 1)
  }

}

export const entriesService = new EntriesService()